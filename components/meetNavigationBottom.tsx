"use client"

import React, { useState, useEffect } from 'react';
import { FaMicrophoneSlash, FaVideoSlash, FaDesktop, FaPowerOff, FaExpand, FaSmile} from 'react-icons/fa';
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



const meetNavigationBottom = () => {
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
          <FaMicrophoneSlash className="text-xl" />
        </Button>
        
        <Button variant="outline" className="w-14 h-14 rounded-full ">
          <FaVideoSlash className="text-xl" />
        </Button>

        <Button variant="outline" className="w-14 h-14 rounded-full ">
          <FaSmile className="text-xl" />
        </Button>

        <Button variant="outline" className="w-14 h-14 rounded-full ">
          <FaDesktop className="text-xl" />
        </Button>

        <Button variant="destructive" className="w-14 h-14 rounded-full ">
          <FaPowerOff className="text-xl" />
        </Button>

      </div>
      <div className="flex  text-slate-500 text-lg items-center">

        <FaExpand className="text-xl" />

      </div>
    </nav>
  );
};

export default meetNavigationBottom;
