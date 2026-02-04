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

export function FormEducation({
  setStep,
  step,
}: {
  setStep: (value: number) => void;
  step: number;
}) {
  const [id] = React.useState(() =>
    typeof crypto !== "undefined" ? crypto.randomUUID() : String(Date.now()),
  );

  return (
    <div className="flex flex-1 flex-col ">
      <div>
        <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Education</CardTitle>
            <CardDescription>
              Add your education details. Include institution, degree, dates and
              GPA if applicable.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="flex flex-col">
              <input type="hidden" id="id" name="id" value={id} />

              <div className="flex flex-row gap-10">
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="college" className="mb-2">
                    College / Institution
                  </Label>
                  <Input
                    id="college"
                    name="college"
                    type="text"
                    className="mb-8"
                    required
                  />

                  <Label htmlFor="degree" className="mb-2">
                    Degree
                  </Label>
                  <Input
                    id="degree"
                    name="degree"
                    type="text"
                    className="mb-8"
                  />

                  <Label htmlFor="field" className="mb-2">
                    Field of Study
                  </Label>
                  <Input id="field" name="field" type="text" className="mb-8" />
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

                  <Label htmlFor="gpa" className="mb-2">
                    GPA
                  </Label>
                  <Input
                    id="gpa"
                    name="gpa"
                    type="text"
                    className="mb-8"
                    placeholder="e.g., 3.8"
                  />
                </div>
              </div>
            </CardContent>
          </form>
        </Card>
        <div className="flex flex-row px-9 py-6 gap-10 justify-between items-center">
          {step > 2 && (
            <Button className="px-8 py-6" onClick={() => setStep(2)}>
              Back
            </Button>
          )}
          <Button className="px-8 py-6" onClick={() => setStep(4)}>
            Next: Skills
          </Button>
        </div>
      </div>
    </div>
  );
}
