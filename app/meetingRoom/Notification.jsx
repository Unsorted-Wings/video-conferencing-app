// import React, { useContext } from "react";
// import { Button } from "@/components/ui/button";
// import { SocketContext } from "@/context/SocketContext";

// const Notification = () => {
//   // Ensure that this code only runs on the client-side
//   if (typeof window === 'undefined') {
//     return null;
//   }

//   const { answerCall, call, callAccepted } = useContext(SocketContext);

//   return (
//     <>
//       {call.isReceivingCall && !callAccepted && (
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//           <h1>{call.name} is calling:</h1>
//           <Button onClick={answerCall}>Answer</Button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Notification;
// Notification.jsx
"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { SocketContext } from "@/context/SocketContext";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  // Ensure this code only runs on the client-side
  if (typeof window === 'undefined') {
    return null;
  }

  console.log("Call state:", call);
  console.log("Call accepted:", callAccepted);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button onClick={answerCall}>Answer</Button>
        </div>
      )}
    </>
  );
};

export default Notification;
