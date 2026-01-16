import { defineCollection, z } from 'astro:content';

// ============================================
// Knowledge Base Collection
// ============================================

// Person schema for author/editor info
const personSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
});

// Knowledge category enum - extensible for future sections
const knowledgeCategoryEnum = z.enum([
  'physical-ai',   // Physical AI fundamentals
  'models',        // VLA models
  'companies',     // Companies in the space
  'hardware',      // Robot hardware
  'essays',        // Essays and opinions
  'people',        // Key people in the field
]);

// Knowledge collection schema
const knowledgeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    category: knowledgeCategoryEnum,

    // Optional categorization
    subcategory: z.string().optional(), // e.g., 'fundamentals', 'challenges', 'solutions'
    tags: z.array(z.string()).optional(),

    // Ordering and navigation
    order: z.number().optional(), // For manual sorting within category
    related: z.array(z.string()).optional(), // Related document slugs

    // Metadata
    author: z.string().optional(), // Legacy field
    date: z.coerce.date().optional(), // For essays

    // Authorship tracking
    createdBy: personSchema.optional(), // First author
    lastEditedBy: personSchema.optional(), // Last editor
    lastEditedAt: z.coerce.date().optional(), // Last edit timestamp

    // Status
    isDraft: z.boolean().default(false),
    isFeatured: z.boolean().default(false),

    // Display options
    icon: z.string().optional(), // Icon identifier for the document
    thumbnail: z.string().optional(), // Thumbnail image URL
  }),
});

// ============================================
// Events Collection
// ============================================

// Event status enum
const eventStatusEnum = z.enum(['upcoming', 'ongoing', 'past', 'cancelled']);

// Speaker schema
const speakerSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  affiliation: z.string().optional(),
  topic: z.string().optional(),
});

// Events collection schema
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string(),

    // Optional date fields
    endDate: z.coerce.date().optional(),
    time: z.string().optional(),

    // Status (will be computed if not provided)
    status: eventStatusEnum.optional(),

    // Images
    thumbnail: z.string().optional(),
    poster: z.string().optional(),

    // Links
    registrationUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
    blogUrl: z.string().url().optional(),

    // Metadata
    tags: z.array(z.string()).optional(),
    hosts: z.array(z.string()).optional(),
    sponsors: z.array(z.string()).optional(),

    // Speakers
    speakers: z.array(speakerSchema).optional(),

    // Gallery (YouTube video IDs)
    gallery: z.array(z.string()).optional(),

    // Misc
    maxAttendees: z.number().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

// ============================================
// Archive Collection (자료 창고 - Video Notes)
// ============================================

// Chapter schema for video notes
const chapterSchema = z.object({
  title: z.string(),
  startTime: z.string(), // "MM:SS" format
  endTime: z.string().optional(),
});

// Archive collection schema
const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(), // 3-line summary
    date: z.coerce.date(),

    // Video info
    videoId: z.string(), // YouTube video ID (uploaded version with Korean subs)
    originalVideoId: z.string().optional(), // Original video ID
    duration: z.string().optional(), // "HH:MM:SS" or "MM:SS"
    thumbnail: z.string().optional(),

    // Chapters for quick navigation
    chapters: z.array(chapterSchema).optional(),

    // Categorization
    tags: z.array(z.string()).optional(),
    source: z.string().optional(), // e.g., "NeurIPS 2025", "Princeton"

    // Status
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  events: eventsCollection,
  knowledge: knowledgeCollection,
  archive: archiveCollection,
};
