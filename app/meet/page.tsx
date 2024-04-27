import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MeetNav from "@/components/meetNavigationBottom";


const MeetingRoom = () => {
  return (
    <div className="flex h-screen">
      <MeetNav/>

    </div>
  );
};

export default MeetingRoom;
