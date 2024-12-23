// import { Button } from '@/components/ui/button';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog";
//   import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import React from 'react';
// import Navbar from '@/components/Navbar';

// const LandingPage = () => {

//     return (
//         <div className="flex min-h-screen px-8">
//             <Navbar />

//             <div className="flex flex-col justify-center w-1/2 p-8">
//                 <h1 className="text-[2.5rem] font-bold mb-2">Collaborate, Build, Enjoy!</h1>
//                 <div className="mt-2">
//                     {/* <Button className="mr-4 px-4 py-5 text-lg">Join a meet</Button>
//                     <Button variant="secondary">Host a meet</Button> */}
//                     <Dialog>
//                         <DialogTrigger asChild>
//                             <Button className="px-4 py-5 text-lg">Join a meet</Button>
//                         </DialogTrigger>
//                         <DialogContent className="sm:max-w-[425px]">
//                             <DialogHeader>
//                                 <DialogTitle>Join Meet</DialogTitle>
//                             </DialogHeader>
//                             <div className="grid gap-4 py-4">
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="name" className="text-right">
//                                         Name
//                                     </Label>
//                                     <Input
//                                         id="name"
//                                         defaultValue="Joe Doe"
//                                         className="col-span-3"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="link" className="text-right">
//                                         Link
//                                     </Label>
//                                     <Input
//                                         id="link"
//                                         placeholder="Enter link"
//                                         className="col-span-3"
//                                     />
//                                 </div>
//                             </div>
//                             <DialogFooter>
//                                 <Button type="submit" className="m-auto min-w-[30%] rounded-lg">Join</Button>
//                             </DialogFooter>
//                         </DialogContent>
//                     </Dialog>
//                     <Dialog>
//                         <DialogTrigger asChild className="ml-4">
//                             <Button variant="secondary" className="px-4 py-5 text-lg">Host a meet</Button>
//                         </DialogTrigger>
//                         <DialogContent className="sm:max-w-[425px]">
//                             <DialogHeader>
//                                 <DialogTitle>Join Meet</DialogTitle>
//                             </DialogHeader>
//                             <div className="grid gap-4 py-4">
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="name" className="text-right">
//                                         Name
//                                     </Label>
//                                     <Input
//                                         id="name"
//                                         defaultValue="Joe Doe"
//                                         className="col-span-3"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="link" className="text-right">
//                                         Link
//                                     </Label>
//                                     <Input
//                                         id="link"
//                                         placeholder="Enter link"
//                                         className="col-span-3"
//                                     />
//                                 </div>
//                             </div>
//                             <DialogFooter>
//                                 <Button type="submit" className="m-auto min-w-[30%] rounded-lg">Join</Button>
//                             </DialogFooter>
//                         </DialogContent>
//                     </Dialog>
//                 </div>

//             </div>
//             <div className="flex flex-col justify-center items-center w-1/2 p-8">
//                 <h1 className="text-7xl font-bold mb-2 font-mono">Collab</h1>
//             </div>

//         </div>

//     );
// };

// export default LandingPage;
/*
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  const handleHostMeeting = () => {
    router.push("/meetingRoom");
  };

  return (
    <div className="flex min-h-screen px-8">
      <Navbar />

      <div className="flex flex-col justify-center w-1/2 p-8">
        <h1 className="text-[2.5rem] font-bold mb-2">
          Collaborate, Build, Enjoy!
        </h1>
        <div className="mt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-4 py-5 text-lg">Join a meet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Join Meet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Joe Doe"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="link" className="text-right">
                    Link
                  </Label>
                  <Input
                    id="link"
                    placeholder="Enter link"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="m-auto min-w-[30%] rounded-lg">
                  Join
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild className="ml-4">
              <Button
                variant="secondary"
                className="px-4 py-5 text-lg"
                onClick={handleHostMeeting}
              >
                Host a meet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTrigger asChild className="ml-4">
                <Link href="/hostMeetingRoom">
                  <Button variant="secondary" className="px-4 py-5 text-lg">
                    Host a meet
                  </Button>
                </Link>
              </DialogTrigger>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Joe Doe"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="link" className="text-right">
                    Link
                  </Label>
                  <Input
                    id="link"
                    placeholder="Enter link"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="m-auto min-w-[30%] rounded-lg">
                  Host
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
      <h1 className="text-7xl font-bold mb-2 font-mono">Collab</h1>
      </div>
      </div>
      );
      };
      
      export default LandingPage;
      */
/*
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { app } from "@/app/api/firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LandingPage = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async (userId: any) => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, `users/${userId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
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
  }, []);

  // Retrieve user from localStorage
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  if (currentUser && !userData.name && !userData.email) {
    setUserData({
      name: currentUser.displayName || "",
      email: currentUser.email || "",
    });
  }
  const handleCallUser = () => {
    router.push("/meetingRoom?type=guest");
  };

  const handleHostMeeting = () => {
    router.push("/meetingRoom?type=host");
  };

  return (
    <div className="flex min-h-screen px-8">
      <Navbar />

      <div className="flex flex-col justify-center w-1/2 p-8">
        <h1 className="text-[2.5rem] font-bold mb-2">
          Collaborate, Build, Enjoy!
        </h1>
        <div className="mt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-4 py-5 text-lg">Join a meet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Join Meet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={
                      userData.name ||
                      (currentUser && currentUser.displayName) ||
                      " "
                    }
                    className="col-span-3"
                    readOnly
                    autoFocus={false}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="m-auto min-w-[30%] rounded-lg"
                  onClick={handleCallUser}
                >
                  Join a meet
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild className="ml-4">
              <Button variant="secondary" className="px-4 py-5 text-lg">
                Host a meet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Host Meet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={
                      userData.name ||
                      (currentUser && currentUser.displayName) ||
                      " "
                    }
                    className="col-span-3"
                    readOnly
                    autoFocus={false}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="m-auto min-w-[30%] rounded-lg"
                  onClick={handleHostMeeting}
                >
                  Host
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <h1 className="text-7xl font-bold mb-2 font-mono">Collab</h1>
      </div>
    </div>
  );
};

export default LandingPage;
*/
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { useType } from "@/context/TypeContext";
import { useRouter } from "next/navigation";
import { app } from "@/app/api/firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LandingPage = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const { setType } = useType();
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async (userId: any) => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, `users/${userId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
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
  }, []);

  // Retrieve user from localStorage
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  if (currentUser && !userData.name && !userData.email) {
    setUserData({
      name: currentUser.displayName || "",
      email: currentUser.email || "",
    });
  }

  const handleJoin = () => {
    setType("guest");
    router.push("/meetingRoom");
  };

  const handleHost = () => {
    setType("host");
    router.push("/meetingRoom");
  };

  return (
    <div className="flex min-h-screen px-8">
      <Navbar />
      <div className="flex flex-col justify-center w-1/2 p-8">
        <h1 className="text-[2.5rem] font-bold mb-2">
          Collaborate, Build, Enjoy!
        </h1>
        <div className="mt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-4 py-5 text-lg">Join a meet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Join Meet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={
                      userData.name ||
                      (currentUser && currentUser.displayName) ||
                      " "
                    }
                    className="col-span-3"
                    readOnly
                    autoFocus={false}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="m-auto min-w-[30%] rounded-lg"
                  onClick={handleJoin}
                >
                  Join a meet
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild className="ml-4">
              <Button variant="secondary" className="px-4 py-5 text-lg">
                Host a meet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Host Meet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={
                      userData.name ||
                      (currentUser && currentUser.displayName) ||
                      " "
                    }
                    className="col-span-3"
                    readOnly
                    autoFocus={false}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="m-auto min-w-[30%] rounded-lg"
                  onClick={handleHost}
                >
                  Host
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <h1 className="text-7xl font-bold mb-2 font-mono">Collab</h1>
      </div>
    </div>
  );
};

export default LandingPage;
