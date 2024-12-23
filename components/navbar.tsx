// "use client"

// import React, { useState, useEffect } from 'react';
// import { FaHome, FaUser, FaBell, FaInfo } from 'react-icons/fa';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { app } from "@/app/api/firebase/firebaseConfig";
// import {
//   set,
//   ref,
//   get,
//   getDatabase,
//   child,
//   update,
//   remove,
// } from "firebase/database";

// const BottomNavbar = () => {
//   const [currentTime, setCurrentTime] = useState(null);
//   const [mounted, setMounted] = useState(false);
//   const [name,setName] = useState()

//  const fetchData = async () => {
//   const db = getDatabase(app);
//   const dbref = ref(db, 'users');
//   const snapshot = await get(dbref);

//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//     setName(Object.values(snapshot.val()));
//   } else {
//     console.log("No data available");
//   }

//  }

//   // Function to update the current time
//   const updateCurrentTime = () => {
//     setCurrentTime(new Date());
//   };

//   // Effect to update the time every minute and set the mounted state
//   useEffect(() => {
//     setMounted(true);
//     updateCurrentTime(); // Initial time set
//     const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

//     // Cleanup function to clear the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   // Function to get the day of the week
//   const getDayOfWeek = () => {
//     if (!currentTime) return '';
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return daysOfWeek[currentTime.getDay()];
//   };

//   if (!mounted || !currentTime) return null; // Avoid rendering on the server

//   return (
//     <nav className="fixed bottom-5 left-0 right-0 flex px-6 justify-between items-center">
//       <div className="flex  text-slate-500 text-lg items-center">
//         {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         <Separator orientation="vertical" className=" h-6 mx-2" />
//         {getDayOfWeek()}
//       </div>

//       <div className="flex w-fit text-slate-500 space-x-4">
//         <Link href="/home">
//           <Button variant="outline" className="w-14 h-14 rounded-full ">
//             <FaHome className="text-xl" />
//           </Button>
//         </Link>
//         <Popover>
//           <PopoverTrigger><Button variant="outline" className="w-14 h-14 rounded-full ">
//             <FaBell className="text-xl" />
//           </Button></PopoverTrigger>
//           <PopoverContent>
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Notifications</h3>
//               <div className="grid gap-4 mt-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-base font-semibold">New message</h4>
//                     <p className="text-sm text-slate-500">You have a new message from John Doe</p>
//                   </div>
//                 </div>
//                 <Separator />
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-base font-semibold">New message</h4>
//                     <p className="text-sm text-slate-500">You have a new message from John Doe</p>
//                   </div>
//                 </div>
//                 <Separator />
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-base font-semibold">New message</h4>
//                     <p className="text-sm text-slate-500">You have a new message from John Doe</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </PopoverContent>

//         </Popover>
//         <Link href="/about">
//           <Button variant="outline" className="w-14 h-14 rounded-full ">
//             <FaInfo className="text-xl" />
//           </Button>
//         </Link>

//       </div>
//       <div className="flex  text-slate-500 text-lg items-center">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" className="w-14 h-14 rounded-full ">
//               <FaUser className="text-xl" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Profile</SheetTitle>
//               <SheetDescription>
//                 Make changes to your profile here. Click save when you&apos;re done.
//               </SheetDescription>
//             </SheetHeader>
//             <div className="grid gap-4 py-4 mb-2">
//               <div className="grid items-center justify-center my-4">
//                 <Avatar className='w-[120px] h-[120px]'>
//                   <AvatarImage  src="https://github.com/shadcn.png" />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4 mt-4">
//                 <Label htmlFor="name" className="text-right">
//                   Name
//                 </Label>
//                 <Input id="name" value="Pedro Duarte" className="col-span-3" />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="email" className="text-right">
//                   Email
//                 </Label>
//                 <Input id="email" value="peduarte@gmail.com" className="col-span-3" />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="username" className="text-right">
//                   Username
//                 </Label>
//                 <Input id="username" value="@peduarte" className="col-span-3" />
//               </div>
//             </div>
//             <SheetFooter>
//               <SheetClose asChild>
//                 <Button type="submit">Save changes</Button>
//               </SheetClose>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>

//       </div>
//     </nav>
//   );
// };

// export default BottomNavbar;

"use client";

import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaBell, FaInfo } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
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
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { app } from "@/app/api/firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';

const BottomNavbar = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async (userId: any) => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, `users/${userId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const data = snapshot.val();
          setUserData({
            name: data.name,
            email: data.email,
          });
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid);
      }
    });

    setMounted(true);
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  const getDayOfWeek = () => {
    if (!currentTime) return "";
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[currentTime.getDay()];
  };

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!mounted || !currentTime) return null;

  // Retrieve user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="fixed bottom-5 left-0 right-0 flex px-6 justify-between items-center">
      <div className="flex text-slate-500 text-lg items-center">
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <Separator orientation="vertical" className="h-6 mx-2" />
        {getDayOfWeek()}
      </div>

      <div className="flex w-fit text-slate-500 space-x-4">
        <Link href="/home">
          <Button variant="outline" className="w-14 h-14 rounded-full">
            <FaHome className="text-xl" />
          </Button>
        </Link>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="w-14 h-14 rounded-full">
              <FaBell className="text-xl" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="grid gap-4 mt-4">
                {["New message", "Another notification"].map(
                  (notification, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-base font-semibold">
                            {notification}
                          </h4>
                          <p className="text-sm text-slate-500">
                            Details about the notification
                          </p>
                        </div>
                      </div>
                      {index < 2 && <Separator />}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Link href="/about">
          <Button variant="outline" className="w-14 h-14 rounded-full">
            <FaInfo className="text-xl" />
          </Button>
        </Link>
      </div>
      <div className="flex text-slate-500 text-lg items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-14 h-14 rounded-full">
              <FaUser className="text-xl" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Profile</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4 mb-2">
              <div className="grid items-center justify-center my-4">
                <Avatar className="w-[120px] h-[120px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mt-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={
                    userData.name || (currentUser && currentUser.displayName)
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={userData.email || (currentUser && currentUser.email)}
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="destructive" onClick={handleLogout}>
                  Log Out
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default BottomNavbar;
