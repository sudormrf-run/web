import { defineCollection, z } from 'astro:content';

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

export const collections = {
  events: eventsCollection,
};
