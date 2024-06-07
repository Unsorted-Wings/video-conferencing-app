// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { SocketContext } from "@/context/SocketContext";
// import React, { useState, useContext } from "react";

// const Options = ({ children }) => {
//   const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
//     useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     // Handle form submission logic here if needed
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div
//         style={{
//           padding: "10px",
//           border: "2px solid black",
//           width: "600px",
//           margin: "35px 0",
//           padding: 0,
//         }}
//       >

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "20px",
//             }}
//           >
//             <div style={{ padding: "10px" }}>
//               <h6>Account Info</h6>
//               <Input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//               />
//               {console.log(me)}
//               <CopyToClipboard text={me} >
//                 <Button>
//                   Copy Your ID
//                 </Button>
//               </CopyToClipboard>
//             </div>
//             <div style={{ padding: "10px" }}>
//               <h6>Make a call</h6>
//               <Input
//                 type="text"
//                 value={idToCall}
//                 onChange={(e) => setIdToCall(e.target.value)}
//                 placeholder="ID to call"
//               />
//               {callAccepted && !callEnded ? (
//                 <Button onClick={leaveCall}>Hang Up</Button>
//               ) : (
//                 <Button onClick={() => callUser(idToCall)}>Call</Button>
//               )}
//             </div>
//           </div>

//         {children}
//       </div>
//     </div>
//   );
// };

// export default Options;

// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { SocketContext } from "@/context/SocketContext";
// import React, { useState, useContext } from "react";

// const Options = ({ children }) => {
//   const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
//     useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState("");

//   const handleCallUser = () => {
//     if (idToCall.trim()) {
//       callUser(idToCall);
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div
//         style={{
//           padding: "10px",
//           border: "2px solid black",
//           width: "600px",
//           margin: "35px 0",
//           padding: 0,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: "20px",
//           }}
//         >
//           <div style={{ padding: "10px" }}>
//             <h6>Account Info</h6>
//             <Input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//             />
//             {console.log(me)}
//             <CopyToClipboard text={me}>
//               <Button>Copy Your ID</Button>
//             </CopyToClipboard>
//           </div>
//           <div style={{ padding: "10px" }}>
//             <h6>Make a call</h6>
//             <Input
//               type="text"
//               value={idToCall}
//               onChange={(e) => setIdToCall(e.target.value)}
//               placeholder="ID to call"
//             />
//             {callAccepted && !callEnded ? (
//               <Button onClick={leaveCall}>Hang Up</Button>
//             ) : (
//               <Button onClick={handleCallUser}>Call</Button>
//             )}
//           </div>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Options;
/*
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "@/context/SocketContext";
import React, { useState, useContext } from "react";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const handleCallUser = () => {
    if (idToCall.trim()) {
      callUser(idToCall);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          padding: "10px",
          border: "2px solid black",
          width: "600px",
          margin: "35px 0",
          padding: 0,
        }}
      >
        {!callAccepted && !callEnded && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <h6>Account Info</h6>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {console.log(me)}
              <CopyToClipboard text={me}>
                <Button>Copy Your ID</Button>
              </CopyToClipboard>
            </div>
            <div style={{ padding: "10px" }}>
              <h6>Make a call</h6>
              <Input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="ID to call"
              />
              <Button onClick={handleCallUser}>Call</Button>
            </div>
          </div>
        )}

        {callAccepted && !callEnded && (
          <Button onClick={leaveCall}>Hang Up</Button>
        )}

        {children}
      </div>
    </div>
  );
};

export default Options;*/

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "@/context/SocketContext";
import React, { useState, useContext } from "react";

const Options = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    toggleAudio,
    toggleVideo,
    audioMuted,
    videoMuted,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const handleCallUser = () => {
    if (idToCall.trim()) {
      callUser(idToCall);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          padding: "10px",
          border: "2px solid black",
          width: "600px",
          margin: "35px 0",
          padding: 0,
        }}
      >
        {!callAccepted && !callEnded && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <h6>Account Info</h6>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {console.log(me)}
              <CopyToClipboard text={me}>
                <Button>Copy Your ID</Button>
              </CopyToClipboard>
            </div>
            <div style={{ padding: "10px" }}>
              <h6>Make a call</h6>
              <Input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="ID to call"
              />
              <Button onClick={handleCallUser}>Call</Button>
            </div>
          </div>
        )}

        {callAccepted && !callEnded && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Button onClick={leaveCall}>Hang Up</Button>
            <Button onClick={toggleAudio}>
              {audioMuted ? "Unmute Audio" : "Mute Audio"}
            </Button>
            <Button onClick={toggleVideo}>
              {videoMuted ? "Unmute Video" : "Mute Video"}
            </Button>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Options;
