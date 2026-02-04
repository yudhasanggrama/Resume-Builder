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

interface FormPersonalDataProps {
  addMore: boolean;
  setAddMore: (value: boolean) => void;
  setStep: (value: number) => void;
}

export function FormPersonalData({
  addMore,
  setAddMore,
  setStep,
}: FormPersonalDataProps) {
  return (
    <div className="flex flex-1 flex-col ">
      <div>
        <Card className="flex flex-1 px-4 py-10 overflow-y-auto h-170">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Personal Details
            </CardTitle>
            <CardDescription>
              Users who added phone number and email received 64% more positive
              feedback from recruiters.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="flex flex-col">
              <div className="flex flex-row gap-10">
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="jobTarget" className="mb-2">
                    Job Target
                  </Label>
                  <Input
                    id="jobTarget"
                    name="jobTarget"
                    type="text"
                    className="mb-8"
                  />
                  <Label htmlFor="firstName" className="mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="mb-8"
                  />
                  <Label htmlFor="email" className="mb-2">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    className="mb-8"
                    required
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="photoProfile" className="mb-2">
                    Photo Profile
                  </Label>
                  <Input
                    id="photoProfile"
                    name="photoProfile"
                    type="text"
                    className="mb-8"
                    disabled
                  />
                  <Label htmlFor="lastName" className="mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="mb-8"
                  />
                  <Label htmlFor="phone" className="mb-2">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    className="mb-8"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="mb-2">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  className="mb-8"
                  required
                />
              </div>
              <div className="flex flex-1 flex-row gap-10">
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="cityState" className="mb-2">
                    City, State
                  </Label>
                  <Input
                    id="cityState"
                    name="cityState"
                    type="text"
                    className="mb-8"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <Label htmlFor="country" className="mb-2">
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    className="mb-8"
                    required
                  />
                </div>
              </div>
              <span
                onClick={() => setAddMore(true)}
                className={`${addMore ? "hidden" : "block"} cursor-pointer text-sm text-blue-500 hover:text-blue-800 mb-8`}
              >
                Add more details
              </span>
              {addMore && (
                <>
                  <div className="flex flex-row gap-10">
                    <div className="flex flex-1 flex-col">
                      <Label htmlFor="postalCode" className="mb-2">
                        Postal Code
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        className="mb-8"
                      />
                      <Label htmlFor="dateOfBirth" className="mb-2">
                        Date of birth
                      </Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="text"
                        className="mb-8"
                      />
                      <Label htmlFor="nationality" className="mb-2">
                        Nationality
                      </Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        type="text"
                        className="mb-8"
                        required
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <Label htmlFor="drivingLicense" className="mb-2">
                        Driving License
                      </Label>
                      <Input
                        id="drivingLicense"
                        name="drivingLicense"
                        type="text"
                        className="mb-8"
                      />
                      <Label htmlFor="placeOfBirth" className="mb-2">
                        Place of Birth
                      </Label>
                      <Input
                        id="placeOfBirth"
                        name="placeOfBirth"
                        type="text"
                        className="mb-8"
                      />
                    </div>
                  </div>
                  <span
                    onClick={() => setAddMore(false)}
                    className="cursor-pointer text-sm text-blue-500 hover:text-blue-800 mb-8"
                  >
                    Hide additional details
                  </span>
                </>
              )}
            </CardContent>
          </form>
        </Card>
        <div className="flex flex-row px-9 py-6 gap-10 justify-between items-center">
          <p className="text-xs">
            By signing up by email you agree with our Terms of use and Privacy
            Policy, and resumebuilder's Terms & Conditions and Privacy Policy.
          </p>
          <Button className="px-8 py-6" onClick={() => setStep(2)}>
            Next: Employment History
          </Button>
        </div>
      </div>
    </div>
  );
}
