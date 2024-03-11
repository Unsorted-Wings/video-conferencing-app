"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@radix-ui/react-separator"
import { FaGoogle } from "react-icons/fa6";
import React from 'react'

const page = () => {
  return (
    <div className="h-screen p-14">
      <Card className="h-full w-full flex p-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Welcome to Video Conferencing App</h1>
          <p className="text-gray-500">Sign in to start your meeting</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Enter your credentials to sign in. If you don't have an account, you can sign up.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="signInUsername">Username</Label>
                    <Input id="signInUsername" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signInPassword">Password</Label>
                    <Input id="signInPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full">Sign In</Button>
                  <div className="flex m-4">
                    <Separator />
                    Sign In with
                    <Separator />
                  </div>
                  <Button variant="outline" className="w-12 h-12 rounded-full">
                    <FaGoogle />
                  </Button>

                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>
                    Create a new account by providing the required information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="signUpName">Name</Label>
                    <Input id="signUpName" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signUpUsername">Username</Label>
                    <Input id="signUpUsername" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signUpPassword">Password</Label>
                    <Input id="signUpPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full">Sign Up</Button>
                  <div className="flex m-4">
                    <Separator />
                    Sign Up with
                    <Separator />
                  </div>
                  <Button variant="outline" className="w-12 h-12 rounded-full">
                    <FaGoogle />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}

export default page

