"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";
import { signUpNewUser, signInWithEmail } from "../../actions/auth-action";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

export function AuthDialog() {
  const [change, setChange] = useState<boolean>(false);
  const router = useRouter();
  const { setIsLogin } = useAuth();

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await signUpNewUser(name, email, password);

      setChange(false);
      return response;
    } catch (error) {
      alert(
        "Registration failed. Please check your credentials and try again.",
      );
      console.log("SignUp error >>>", error);
    }
  }

  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signInWithEmail(email, password);

      setIsLogin(true);
      router.push("/design");
    } catch (error) {
      alert("Sign in failed. Please check your credentials and try again.");
      console.log("SignIn error >>>", error);
    }
  }

  return (
    <>
      {change ? (
        <Dialog>
          <DialogTrigger>Sign Up</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <form onSubmit={handleSignUp}>
              <DialogHeader>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogDescription>
                  Create a new account to get started.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </div>

                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={() => setChange(false)}>
                    Sign In
                  </a>
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" onClick={() => setChange(false)}>
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit">Sign Up</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger>Sign in</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <form onSubmit={handleSignIn}>
              <DialogHeader>
                <DialogTitle>Sign In</DialogTitle>
                <DialogDescription>
                  Use your email and password to sign in.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </div>

                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={() => setChange(true)}>
                    Sign Up
                  </a>
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" onClick={() => setChange(false)}>
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit">Sign In</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
