"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../api/firebase/firebaseConfig";
import { set } from "firebase/database";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const page = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const signupHandler = async () => {
    if (!userName && !email && !password) {
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully", user);

      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
    } catch (error) {
      console.log("Error occured", error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log("Sign in with google", user);
    } catch (error) {
      console.log(error);
    }
  };
  const loginHandler = async () => {
    if (!email && !password) {
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setLoginError("Login successfull");
    } catch (error) {
      console.log("Error occured", error);
      setLoginError(error.message);
    }
  };
  return (
    <div className="flex just-center h-screen p-14">
      <div className="w-full p-4">
        <h1 className="text-4xl font-bold text-center text-slate-900">
          Welcome to the login page
        </h1>
        <p className="text-center text-slate-500 text-lg">
          Please sign in to continue
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="shadow-2xl shadow-slate-900 bg-slate-900 bg-opacity-10">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>
                  Enter your credentials to sign in. If you don't have an
                  account, you can sign up.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="signUpEmail">Email</Label>
                  <Input
                    id="signUpEmail"
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signInPassword">Password</Label>
                  <Input
                    id="signInPassword"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={loginHandler}>
                  Sign In
                </Button>
                <div className="w-full flex justify-center mt-6 mb-4">
                  <Separator className="w-[30%]" />
                  <span className="text-[10px] text-slate-500 w-fit mx-4 -mt-1 uppercase">
                    or continue with
                  </span>
                  <Separator className="w-[30%]" />
                </div>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                    onClick={signInWithGoogle}
                  >
                    <FaGoogle className="text-lg" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                  >
                    <FaGithub className="text-xl" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                  >
                    <FaFacebook className="text-xl" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="shadow-2xl shadow-slate-900 bg-slate-900 bg-opacity-10">
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Create a new account by providing the required information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="signUpName">Name</Label>
                  <Input
                    id="signUpName"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signUpEmail">Email</Label>
                  <Input
                    id="signUpEmail"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signInPassword">Password</Label>
                  <Input
                    id="signInPassword"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={signupHandler}>
                  Sign Up
                </Button>
                <div className="w-full flex justify-center mt-6 mb-4">
                  <Separator className="w-[30%]" />
                  <span className="text-[10px] text-slate-500 w-fit mx-4 -mt-1 uppercase">
                    or continue with
                  </span>
                  <Separator className="w-[30%]" />
                </div>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                    onClick={signInWithGoogle}
                  >
                    <FaGoogle className="text-lg" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                  >
                    <FaGithub className="text-xl" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-12 h-12 rounded-full p-0"
                  >
                    <FaFacebook className="text-xl" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
