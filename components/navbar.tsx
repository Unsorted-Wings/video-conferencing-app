"use client"

import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBell } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const BottomNavbar = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the current time
  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  // Effect to update the time every minute
  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to get the day of the week
  const getDayOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[currentTime.getDay()];
  };

  return (
    <nav className="fixed bottom-5 left-0 right-0 flex px-6 justify-between items-center">
      <div className="flex  text-slate-500 text-lg items-center">
        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        <Separator orientation="vertical" className=" h-6 mx-2" />
        {getDayOfWeek()}
      </div>

      <div className="flex w-fit text-slate-500 space-x-4">
        <Button variant="outline" className="w-14 h-14 rounded-full ">
          <FaHome className="text-xl" />
        </Button>
        <Popover>
          <PopoverTrigger><Button variant="outline" className="w-14 h-14 rounded-full ">
            <FaBell className="text-xl" />
          </Button></PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>


      </div>
      <div className="flex  text-slate-500 text-lg items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-14 h-14 rounded-full ">
              <FaUser className="text-xl" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>



      </div>
    </nav>
  );
};

export default BottomNavbar;
