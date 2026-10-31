export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  date: string;
  note: string;
}

export interface Metric { value: string; label: string; note: string }
export interface Video {
  title: string;
  videoUrl: string;
  poster?: string;
  caption: string;
  sourceUrl: string;
  model?: string;
  portrait?: boolean;
}

export interface Technical {
  title: string;
  summary: string;
  bullets: string[];
  pipeline: { title: string; description: string }[];
  diagrams?: { title: string; imageUrl: string; sourceUrl: string; caption: string }[];
  blocks: { title: string; bullets: string[]; body?: string; sourceIds: string[] }[];
  postTraining: { name: string; type: string; description: string; tradeoff: string; url: string }[];
  unknowns: string[];
  sourceIds: string[];
}

export interface VideoLabEpisode {
  meta: { title: string; subtitle: string; date: string; duration: string; coverImage: string };
  opening: { script: string; bullets: string[] };
  accounts: {
    id: string; name: string; handle: string; url: string; observedAt: string; description: string;
    metrics: Metric[]; bullets: string[];
    examples: { title: string; url: string; poster?: string; caption: string; comments: { quote: string; author: string; context: string; url: string; screenshot?: string }[] }[];
    caveats: string[]; sourceIds: string[];
  }[];
  projects: { id: string; title: string; url: string; description: string; steps: string[]; videos: Video[]; bullets: string[]; sourceIds: string[] }[];
  remix: {
    title: string; status: string; bullets?: string[];
    reference: { title: string; url: string; videoUrl: string; poster?: string; note: string };
    portrait: { sourceUrl: string; imageUrl?: string; note: string };
    sharedPrompt: string; method: string[]; caveats: string[];
    budget: { limitUsd: number; estimatedUsd: number; chargedUsd: number; notes: string[] };
    runs: { modelId: string; name: string; status: string; videoUrl?: string; poster?: string; mode: string; duration: number; resolution: string; estimatedUsd: number; chargedUsd: number; observations: string[]; error?: string }[];
    sourceIds: string[];
  };
  cases: {
    id: string; title: string; creator: string; date: string; url: string;
    kind: string; youtubeId?: string; startSeconds?: number;
    description: string; videos: Video[]; models: string[]; conditions: string;
    questions: string[]; caveats: string[]; sourceIds: string[];
  }[];
  comparison: {
    columns: string[]; bullets: string[];
    rows: { label: string; values: string[]; sourceIds: string[] }[];
    prices: { model: string; mode: string; resolution: string; usdPerSecond: string; exampleCost: string; note: string; sourceIds: string[] }[];
    benchmarks: { name: string; task: string; date: string; scores: { model: string; score: string; uncertainty: string; samples: string }[]; method: string; caveat: string; sourceIds: string[] }[];
  };
  technical: { h3: Technical; wan: Technical };
  sources: Source[];
}
