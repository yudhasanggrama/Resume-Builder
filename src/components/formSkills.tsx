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
import { ISkill } from "../../types";

export function FormSkills({
  setStep,
  step,
}: {
  setStep: (value: number) => void;
  step: number;
}) {
  const levels = ["novice", "beginner", "skillful", "experienced", "expert"];
  const [skills, setSkills] = React.useState<Array<ISkill>>(() => [
    {
      id:
        typeof crypto !== "undefined"
          ? crypto.randomUUID()
          : String(Date.now()),
      skillName: "",
      level: ["beginner"],
    },
  ]);

  const addSkill = () =>
    setSkills((prev) => [
      ...prev,
      {
        id:
          typeof crypto !== "undefined"
            ? crypto.randomUUID()
            : String(Date.now()),
        skillName: "",
        level: ["beginner"],
      },
    ]);

  const updateSkillName = (index: number, value: string) =>
    setSkills((prev) =>
      prev.map((s, i) => (i === index ? { ...s, skillName: value } : s)),
    );

  const updateSkillLevel = (index: number, value: string) =>
    setSkills((prev) =>
      prev.map((s, i) => (i === index ? { ...s, level: [value] } : s)),
    );

  const removeSkill = (index: number) =>
    setSkills((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="flex flex-1 flex-col ">
      <div>
        <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Skills</CardTitle>
            <CardDescription>
              Add your skills and select proficiency level.
            </CardDescription>
          </CardHeader>

          <form>
            <CardContent className="flex flex-col">
              {skills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="flex flex-row items-start gap-6 mb-6"
                >
                  <input
                    type="hidden"
                    name={`skills[${idx}].id`}
                    value={skill.id}
                  />
                  <div className="flex-1">
                    <Label htmlFor={`skillName-${idx}`} className="mb-2">
                      Skill
                    </Label>
                    <Input
                      id={`skillName-${idx}`}
                      name={`skills[${idx}].skillName`}
                      type="text"
                      value={skill.skillName}
                      onChange={(e) => updateSkillName(idx, e.target.value)}
                      className="mb-2"
                    />

                    <Label htmlFor={`skillLevel-${idx}`} className="mb-2">
                      Level
                    </Label>
                    <select
                      id={`skillLevel-${idx}`}
                      name={`skills[${idx}].level`}
                      value={skill.level[0]}
                      onChange={(e) => updateSkillLevel(idx, e.target.value)}
                      className="w-full mb-2 rounded-md border px-3 py-2"
                    >
                      {levels.map((l) => (
                        <option key={l} value={l}>
                          {l.charAt(0).toUpperCase() + l.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {}
                  <div className="flex flex-col mt-5.5 gap-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        removeSkill(idx);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <div className="mt-2">
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    addSkill();
                  }}
                  className="text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
                >
                  + Add one more skill
                </span>
              </div>
            </CardContent>
          </form>
        </Card>

        <div className="flex flex-row px-9 py-6 gap-10 justify-between items-center">
          {step > 3 && (
            <Button className="px-8 py-6" onClick={() => setStep(3)}>
              Back
            </Button>
          )}
          <Button className="px-8 py-6" onClick={() => setStep(5)}>
            Next: Additional Sections
          </Button>
        </div>
      </div>
    </div>
  );
}
