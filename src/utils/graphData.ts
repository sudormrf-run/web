/**
 * Graph Data Utility for Knowledge Base
 * Generates nodes and links for force-graph visualization
 */

export interface GraphNode {
  id: string;
  type: 'document';
  label: string;
  category?: string;
  color?: string;
  url?: string;
  val?: number; // Node size
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Category colors matching the design system
const categoryColors: Record<string, string> = {
  essays: '#eab308',    // yellow
  models: '#3b82f6',    // blue
  companies: '#10b981', // green
  hardware: '#a78bfa',  // purple
  people: '#f472b6',    // pink
};

// Parse markdown links from content body
// Matches patterns like:
// - [text](../people/tony-zhao.md) - relative path with extension
// - [text](../models/act) - relative path without extension
// - [text](cosmos) - bare slug (same folder reference)
function parseMarkdownLinks(body: string, currentSlug: string): string[] {
  const linkedSlugs: string[] = [];

  // Match markdown links: [text](path)
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let match;

  // Extract current document's category folder for bare slug resolution
  // e.g., "ko/models/groot-n1-6" -> "models"
  const currentCategory = currentSlug.split('/')[1] || '';

  while ((match = linkRegex.exec(body)) !== null) {
    const path = match[2];

    // Skip external URLs, anchors, and asset paths
    if (path.startsWith('http') || path.startsWith('#')) continue;
    if (path.startsWith('../assets') || path.startsWith('./assets')) continue;

    // Extract the slug from relative path
    let cleanPath = path
      .replace(/^(\.\.\/)+/, '')  // Remove ALL leading ../
      .replace(/^\.\//, '')       // Remove leading ./
      .replace(/\.md$/, '');      // Remove .md extension

    // Skip if still looks like an external URL or asset
    if (cleanPath.startsWith('http') || cleanPath.startsWith('assets')) continue;

    // Handle bare slugs (same folder reference)
    // e.g., "cosmos" in models folder -> "models/cosmos"
    if (cleanPath && !cleanPath.includes('/') && currentCategory) {
      cleanPath = `${currentCategory}/${cleanPath}`;
    }

    if (cleanPath) {
      linkedSlugs.push(cleanPath);
    }
  }

  return linkedSlugs;
}

export function generateGraphData(
  contentItems: Array<{
    slug: string;
    body: string;
    data: {
      title: string;
      description?: string;
      category: string;
      tags?: string[];
      related?: string[];
    };
  }>,
  locale: 'ko' | 'en' = 'ko'
): GraphData {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const linkSet = new Set<string>(); // To avoid duplicate links
  const connectionCounts = new Map<string, number>(); // Track connections per document

  // First pass: count connections for each document
  contentItems.forEach(item => {
    const linkedSlugs = parseMarkdownLinks(item.body, item.slug);
    const relatedSlugs = item.data.related || [];

    // Count outgoing connections
    const allConnections = [...linkedSlugs, ...relatedSlugs];
    connectionCounts.set(item.slug, (connectionCounts.get(item.slug) || 0) + allConnections.length);

    // Count incoming connections
    allConnections.forEach(linkedSlug => {
      const normalizedSlug = linkedSlug.replace('.md', '');
      contentItems.forEach(other => {
        if (other.slug.endsWith(normalizedSlug) || other.slug.includes(normalizedSlug)) {
          connectionCounts.set(other.slug, (connectionCounts.get(other.slug) || 0) + 1);
        }
      });
    });
  });

  // Create document nodes
  contentItems.forEach(item => {
    const docId = `doc-${item.slug}`;
    const category = item.data.category;

    // Calculate node size - essays are larger as central hubs
    const connectionCount = connectionCounts.get(item.slug) || 0;
    const isEssay = category === 'essays';
    const baseSize = isEssay ? 6 : 3; // Essays are bigger
    const nodeSize = baseSize + Math.min(connectionCount * 0.3, 4);

    nodes.push({
      id: docId,
      type: 'document',
      label: item.data.title,
      category: category,
      color: categoryColors[category] || '#6b7280',
      url: locale === 'ko'
        ? `/knowledge/${item.slug.replace('ko/', '')}`
        : `/en/knowledge/${item.slug.replace('en/', '')}`,
      val: nodeSize,
    });
  });

  // Second pass: create links from markdown content and related field
  contentItems.forEach(item => {
    const docId = `doc-${item.slug}`;

    // Parse links from markdown body
    const linkedSlugs = parseMarkdownLinks(item.body, item.slug);

    // Also include related field
    const relatedSlugs = (item.data.related || []).map(s => s.replace('.md', ''));

    // Combine all linked slugs
    const allLinkedSlugs = [...new Set([...linkedSlugs, ...relatedSlugs])];

    allLinkedSlugs.forEach(linkedSlug => {
      // Find the target document
      const targetDoc = contentItems.find(other => {
        const otherSlugNormalized = other.slug.replace('ko/', '').replace('en/', '');
        return otherSlugNormalized === linkedSlug ||
               otherSlugNormalized.endsWith(linkedSlug) ||
               other.slug.endsWith(linkedSlug);
      });

      if (targetDoc) {
        const targetId = `doc-${targetDoc.slug}`;

        // Create unique link key (sorted to avoid duplicates)
        const linkKey = [docId, targetId].sort().join('->');

        if (!linkSet.has(linkKey) && docId !== targetId) {
          linkSet.add(linkKey);
          links.push({
            source: docId,
            target: targetId,
          });
        }
      }
    });
  });

  return { nodes, links };
}

// Helper to get unique tags with counts
export function getTagCounts(
  contentItems: Array<{
    data: {
      tags?: string[];
    };
  }>
): Map<string, number> {
  const tagCounts = new Map<string, number>();

  contentItems.forEach(item => {
    const tags = item.data.tags || [];
    tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return tagCounts;
}

// Helper to get unique categories with counts
export function getCategoryCounts(
  contentItems: Array<{
    data: {
      category: string;
    };
  }>
): Map<string, number> {
  const categoryCounts = new Map<string, number>();

  contentItems.forEach(item => {
    const category = item.data.category;
    categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
  });

  return categoryCounts;
}
