import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MeetNavigationBottom from "@/components/MeetNavigationBottom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MeetingRoom = () => {
  return (
    <div className="h-screen p-4">
      <MeetNavigationBottom />
      <div className="h-[90%] w-full flex justify-center items-center">
        <Card className="w-2/3 h-3/4 ">

          <CardContent className="h-full grid justify-center items-center">
            <Avatar className='w-[120px] h-[120px]'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardContent>

        </Card>
      </div>


    </div>
  );
};

export default MeetingRoom;
