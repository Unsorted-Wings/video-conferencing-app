// import React from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import VideoPlayer with ssr: false
// const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
//   ssr: false,
// });

// import Options from './Options'
// import Notification from './Notification'

// const MeetingRoom = () => {
//   return (
//     <>
//       <VideoPlayer />
//       <Options >
//         <Notification />
//       </Options>
//     </>
//   );
// };

// export default MeetingRoom;
"use client";
import dynamic from "next/dynamic";
import { useType } from "@/context/TypeContext";

// Dynamically import VideoPlayer with ssr: false
const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});

import Options from "./Options";
import Notification from "./Notification";

const MeetingRoom = () => {
  const { type } = useType();

  return (
    <>
      <VideoPlayer type={type} />
      <Options type={type}>
        <Notification type={type} />
      </Options>
    </>
  );
};

export default MeetingRoom;
