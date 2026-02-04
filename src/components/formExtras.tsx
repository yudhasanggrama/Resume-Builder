import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IExtraSection } from "../../types/types";

export function FormExtras({
  setStep,
  step,
}: {
  setStep: (value: number) => void;
  step: number;
}) {
  const [extras, setExtras] = React.useState<IExtraSection>({
    certifications: [
      {
        name: "",
        issuer: "",
        date: "",
        url: "",
      },
    ],
    languages: [
      {
        name: "",
        level: "",
      },
    ],
    projects: [
      {
        name: "",
        description: "",
        url: "",
      },
    ],
  });

  const updateCertification = (index: number, field: string, value: string) => {
    setExtras((prev: IExtraSection) => {
      const certs = [...prev.certifications];
      // @ts-ignore - shape matches IExtraSection
      certs[index] = { ...certs[index], [field]: value };
      return { ...prev, certifications: certs };
    });
  };

  const addCertification = () =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { name: "", issuer: "", date: "", url: "" },
      ],
    }));

  const removeCertification = (index: number) =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      certifications: prev.certifications.filter(
        (_: any, i: number) => i !== index,
      ),
    }));

  const updateLanguage = (index: number, field: string, value: string) => {
    setExtras((prev: IExtraSection) => {
      const langs = [...prev.languages];
      // @ts-ignore - shape matches IExtraSection
      langs[index] = { ...langs[index], [field]: value };
      return { ...prev, languages: langs };
    });
  };

  const addLanguage = () =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      languages: [...prev.languages, { name: "", level: "" }],
    }));

  const removeLanguage = (index: number) =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      languages: prev.languages.filter((_: any, i: number) => i !== index),
    }));

  const updateProject = (index: number, field: string, value: string) => {
    setExtras((prev: IExtraSection) => {
      const projs = [...prev.projects];
      // @ts-ignore - shape matches IExtraSection
      projs[index] = { ...projs[index], [field]: value };
      return { ...prev, projects: projs };
    });
  };

  const addProject = () =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", url: "" }],
    }));

  const removeProject = (index: number) =>
    setExtras((prev: IExtraSection) => ({
      ...prev,
      projects: prev.projects.filter((_: any, i: number) => i !== index),
    }));

  return (
    <div className="flex flex-1 flex-col ">
      <div>
        <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Additional Sections
            </CardTitle>
            <CardDescription>
              Add certifications, languages and projects that you'd like to show
              on your resume.
            </CardDescription>
          </CardHeader>

          <form>
            <CardContent className="flex flex-col gap-6">
              <section>
                <h3 className="font-semibold mb-4">Certifications</h3>
                {extras.certifications.map(
                  (c: IExtraSection["certifications"][number], idx: number) => (
                    <div key={idx} className="mb-4 border rounded p-4">
                      <Label
                        htmlFor={`certifications[${idx}].name`}
                        className="mb-2"
                      >
                        Name
                      </Label>
                      <Input
                        id={`certifications[${idx}].name`}
                        name={`certifications[${idx}].name`}
                        value={c.name}
                        onChange={(e) =>
                          updateCertification(idx, "name", e.target.value)
                        }
                        className="mb-3"
                      />

                      <Label
                        htmlFor={`certifications[${idx}].issuer`}
                        className="mb-2"
                      >
                        Issuer
                      </Label>
                      <Input
                        id={`certifications[${idx}].issuer`}
                        name={`certifications[${idx}].issuer`}
                        value={c.issuer}
                        onChange={(e) =>
                          updateCertification(idx, "issuer", e.target.value)
                        }
                        className="mb-3"
                      />

                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Label
                            htmlFor={`certifications[${idx}].date`}
                            className="mb-2"
                          >
                            Date
                          </Label>
                          <Input
                            id={`certifications[${idx}].date`}
                            name={`certifications[${idx}].date`}
                            value={c.date}
                            onChange={(e) =>
                              updateCertification(idx, "date", e.target.value)
                            }
                            className="mb-3"
                          />
                        </div>
                        <div className="flex-1">
                          <Label
                            htmlFor={`certifications[${idx}].url`}
                            className="mb-2"
                          >
                            URL
                          </Label>
                          <Input
                            id={`certifications[${idx}].url`}
                            name={`certifications[${idx}].url`}
                            value={c.url || ""}
                            onChange={(e) =>
                              updateCertification(idx, "url", e.target.value)
                            }
                            className="mb-3"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <Button
                          variant="destructive"
                          onClick={(e) => {
                            e.preventDefault();
                            removeCertification(idx);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ),
                )}

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    addCertification();
                  }}
                >
                  + Add Certification
                </Button>
              </section>

              <section>
                <h3 className="font-semibold mt-6 mb-4">Languages</h3>
                {extras.languages.map(
                  (l: IExtraSection["languages"][number], idx: number) => (
                    <div key={idx} className="mb-4 border rounded p-4">
                      <Label
                        htmlFor={`languages[${idx}].name`}
                        className="mb-2"
                      >
                        Language
                      </Label>
                      <Input
                        id={`languages[${idx}].name`}
                        name={`languages[${idx}].name`}
                        value={l.name}
                        onChange={(e) =>
                          updateLanguage(idx, "name", e.target.value)
                        }
                        className="mb-3"
                      />

                      <Label
                        htmlFor={`languages[${idx}].level`}
                        className="mb-2"
                      >
                        Level (e.g., Fluent, Native, Basic)
                      </Label>
                      <Input
                        id={`languages[${idx}].level`}
                        name={`languages[${idx}].level`}
                        value={l.level || ""}
                        onChange={(e) =>
                          updateLanguage(idx, "level", e.target.value)
                        }
                        className="mb-3"
                      />

                      <div className="flex gap-2 justify-end">
                        <Button
                          variant="destructive"
                          onClick={(e) => {
                            e.preventDefault();
                            removeLanguage(idx);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ),
                )}

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    addLanguage();
                  }}
                >
                  + Add Language
                </Button>
              </section>

              <section>
                <h3 className="font-semibold mt-6 mb-4">Projects</h3>
                {extras.projects.map(
                  (p: IExtraSection["projects"][number], idx: number) => (
                    <div key={idx} className="mb-4 border rounded p-4">
                      <Label htmlFor={`projects[${idx}].name`} className="mb-2">
                        Project Name
                      </Label>
                      <Input
                        id={`projects[${idx}].name`}
                        name={`projects[${idx}].name`}
                        value={p.name}
                        onChange={(e) =>
                          updateProject(idx, "name", e.target.value)
                        }
                        className="mb-3"
                      />

                      <Label
                        htmlFor={`projects[${idx}].description`}
                        className="mb-2"
                      >
                        Description
                      </Label>
                      <textarea
                        id={`projects[${idx}].description`}
                        name={`projects[${idx}].description`}
                        value={p.description || ""}
                        onChange={(e) =>
                          updateProject(idx, "description", e.target.value)
                        }
                        className="w-full mb-3 rounded-md border px-3 py-2"
                      />

                      <Label htmlFor={`projects[${idx}].url`} className="mb-2">
                        URL
                      </Label>
                      <Input
                        id={`projects[${idx}].url`}
                        name={`projects[${idx}].url`}
                        value={p.url || ""}
                        onChange={(e) =>
                          updateProject(idx, "url", e.target.value)
                        }
                        className="mb-3"
                      />

                      <div className="flex gap-2 justify-end">
                        <Button
                          variant="destructive"
                          onClick={(e) => {
                            e.preventDefault();
                            removeProject(idx);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ),
                )}

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    addProject();
                  }}
                >
                  + Add Project
                </Button>
              </section>
            </CardContent>
          </form>
        </Card>

        <div className="flex flex-row px-9 py-6 gap-10 justify-between items-center">
          <p className="text-xs">You can always add more details later.</p>
          <div className="flex gap-4">
            {step > 3 && (
              <Button className="px-8 py-6" onClick={() => setStep(4)}>
                Back
              </Button>
            )}
            <Button className="px-8 py-6" onClick={() => setStep(1)}>
              Save Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
