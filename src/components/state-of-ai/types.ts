export type ReportLink = { label: string; url: string };

export interface StateOfAIReport {
  meta: {
    title: string;
    subtitle: string;
    date: string;
    reportDate: string;
    slideCount: number;
    reportUrl: string;
    pdfUrl: string;
    licenseUrl: string;
    author: string;
    referenceDownload: string;
    coverImage?: string;
    coverAlt?: string;
  };
  editorial: { thesis: string; readingNotes: string[] };
  sections: { id: string; label: string; start: number; end: number }[];
  stories: {
    id: string;
    label: string;
    kicker: string;
    title: string;
    thesis: string;
    paragraphs: string[];
    evidence: { value: string; label: string; detail: string; page: number }[];
    charts: {
      page: number;
      title: string;
      src: string;
      alt: string;
      caption: string;
      caveat?: string;
    }[];
    questions: string[];
    takeaway: string;
    sourceLinks: ReportLink[];
  }[];
  slides: {
    page: number;
    section: string;
    title: string;
    summary: string;
    caveat?: string;
    links: ReportLink[];
  }[];
  predictions: { number: number; text: string; page: number; status?: string }[];
  sources: {
    id: string;
    type: string;
    title: string;
    publisher: string;
    url: string;
    date: string;
    note: string;
  }[];
}
