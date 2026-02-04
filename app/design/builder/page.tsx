"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { FormPersonalData } from "@/components/formPersonalData";
import { FormEmploymentHistory } from "@/components/formEmplymntHstry";
import { FormEducation } from "@/components/formEducation";
import { FormSkills } from "@/components/formSkills";
import { FormExtras } from "@/components/formExtras";

export default function BuilderPage() {
  const [addMore, setAddMore] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div>
      <div className="flex flex-row justify-center w-full p-3 shadow-md mb-2">
        <Button variant="outline" className="w-22 hover:shadow-md">
          Edit
        </Button>
        <Button variant="outline" className="w-22 hover:shadow-md">
          Customize
        </Button>
      </div>
      <div className="flex flex-row justify-center">
        {step === 1 && (
          <FormPersonalData
            addMore={addMore}
            setAddMore={setAddMore}
            setStep={setStep}
          />
        )}
        {step === 2 && <FormEmploymentHistory setStep={setStep} step={step} />}
        {step === 3 && <FormEducation setStep={setStep} step={step} />}
        {step === 4 && <FormSkills setStep={setStep} step={step} />}
        {step === 5 && <FormExtras setStep={setStep} step={step} />}
        <div className="flex flex-1 flex-col">
          <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <form>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
