export type TemplateId = "ats-1" | "ats-2";

export type TemplateMeta = {
    id: TemplateId;
    name: string;
    description?: string;
    supportedFonts: string[];
    supportedColors?: string[];
    previewUrl?: string;
};

export const TEMPLATES: TemplateMeta[] = [
    {
        id: "ats-1",
        name: "ATS Clean",
        description: "Simple, ATS-friendly layout",
        supportedFonts: ["Inter", "Roboto", "Arial"],
        supportedColors: ["#111827", "#1D4ED8", "#0F766E", "#B91C1C"],
    },
    {
        id: "ats-2",
        name: "Modern Minimal",
        description: "Modern layout with subtle styling",
        supportedFonts: ["Inter", "Poppins", "Roboto"],
        supportedColors: ["#111827", "#6D28D9", "#0EA5E9", "#16A34A"],
    },
];

export class TemplateService {
    list(): TemplateMeta[] {
        return TEMPLATES;
    }

    exists(templateId: string): templateId is TemplateId {
        return TEMPLATES.some((t) => t.id === templateId);
    }
}
