import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function FormEmploymentHistory({
  setStep,
  step,
}: {
  setStep: (value: number) => void;
  step: number;
}) {
  const [id] = React.useState(() =>
    typeof crypto !== "undefined" ? crypto.randomUUID() : String(Date.now()),
  );
  const [highlights, setHighlights] = React.useState<string[]>([""]);

  const addHighlight = () => setHighlights((prev) => [...prev, ""]);
  const updateHighlight = (index: number, value: string) =>
    setHighlights((prev) => prev.map((h, i) => (i === index ? value : h)));
  const removeHighlight = (index: number) =>
    setHighlights((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="flex flex-1 flex-col ">
      <div>
        <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Employment History
            </CardTitle>
            <CardDescription>
              Add your recent employment entries. Include company, role, dates,
              location and key highlights.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="flex flex-col">
              <input type="hidden" id="id" name="id" value={id} />

              <div className="flex flex-row gap-10">
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="company" className="mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="mb-8"
                    required
                  />

                  <Label htmlFor="role" className="mb-2">
                    Role / Job Title
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    className="mb-8"
                    required
                  />

                  <Label htmlFor="employment_type" className="mb-2">
                    Employment Type
                  </Label>
                  <Input
                    id="employment_type"
                    name="employment_type"
                    type="text"
                    className="mb-8"
                    placeholder="e.g., Full-time, Part-time, Contract"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <Label htmlFor="start" className="mb-2">
                    Start Date
                  </Label>
                  <Input
                    id="start"
                    name="start"
                    type="month"
                    className="mb-8"
                  />

                  <Label htmlFor="end" className="mb-2">
                    End Date
                  </Label>
                  <Input id="end" name="end" type="month" className="mb-8" />

                  <Label htmlFor="location" className="mb-2">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    className="mb-8"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">Highlights</Label>
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-3">
                    <Input
                      id={`highlight-${idx}`}
                      name={`highlights[${idx}]`}
                      type="text"
                      value={h}
                      onChange={(e) => updateHighlight(idx, e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        removeHighlight(idx);
                      }}
                      className="px-2 py-1"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    addHighlight();
                  }}
                  className="mt-2"
                >
                  Add highlight
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>

        <div className="flex flex-row px-9 py-6 gap-10 justify-between items-center">
          {step > 1 && (
            <Button className="px-8 py-6" onClick={() => setStep(1)}>
              Back
            </Button>
          )}
          <Button className="px-8 py-6" onClick={() => setStep(3)}>
            Next: Education
          </Button>
        </div>
      </div>
    </div>
  );
}
