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

// "use client";
// import React, { useState, useContext, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { SocketContext } from "@/context/SocketContext";
// import {
//   FaMicrophoneSlash,
//   FaVideoSlash,
//   FaVideo,
//   FaPowerOff,
//   FaMicrophone,
// } from "react-icons/fa";
// import { app } from "@/app/api/firebase/firebaseConfig";
// import { getDatabase, ref, get } from "firebase/database";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const Options = ({ children, type }) => {
//   const {
//     me,
//     callAccepted,
//     name,
//     setName,
//     callEnded,
//     leaveCall,
//     callUser,
//     toggleAudio,
//     toggleVideo,
//     audioMuted,
//     videoMuted,
//   } = useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState("");
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async (userId) => {
//       try {
//         const db = getDatabase(app);
//         const dbRef = ref(db, `users/${userId}`);
//         const snapshot = await get(dbRef);
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setName(data.name);
//         } else {
//           console.log("No data available");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     const auth = getAuth(app);
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // Check local storage for user data
//         const currentUser = JSON.parse(localStorage.getItem("user"));
//         if (currentUser && currentUser.displayName) {
//           setName(currentUser.displayName);
//         } else {
//           fetchUserData(user.uid);
//         }
//       }
//     });
//   }, [setName]);

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
//         }}
//       >
//         {!callAccepted && !callEnded && type === "guest" && (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "20px",
//             }}
//           >
//             <div style={{ padding: "10px" }}>
//               <h6>Joining As</h6>
//               <Input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 readOnly
//                 placeholder="Name"
//               />
//             </div>
//             <div style={{ padding: "10px" }}>
//               <h6>Make a call</h6>
//               <Input
//                 type="text"
//                 value={idToCall}
//                 onChange={(e) => setIdToCall(e.target.value)}
//                 placeholder="ID to call"
//               />
//               <Button onClick={handleCallUser}>Join</Button>
//             </div>
//           </div>
//         )}
//         {!callAccepted && !callEnded && type === "host"(
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "20px",
//             }}
//           >
//             <div style={{ padding: "10px" }}>
//               <h6>Hosting As</h6>
//               <Input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 readOnly
//                 placeholder="Name"
//               />

//               <>
//                 <h6>Share this ID with your guest to join the call: {me}</h6>
//                 <CopyToClipboard text={me} onCopy={() => setCopied(true)}>
//                   <Button>{copied ? "Copied" : "Copy Your ID"}</Button>
//                 </CopyToClipboard>
//               </>
//             </div>
//           </div>
//         )}
//         {callAccepted && !callEnded && (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "20px",
//             }}
//           >
//             <Button onClick={toggleAudio}>
//               {audioMuted ? (
//                 <FaMicrophoneSlash className="text-xl" />
//               ) : (
//                 <FaMicrophone className="text-xl" />
//               )}
//             </Button>
//             <Button onClick={toggleVideo}>
//               {videoMuted ? (
//                 <FaVideoSlash className="text-xl" />
//               ) : (
//                 <FaVideo className="text-xl" />
//               )}
//             </Button>
//             <Button onClick={leaveCall}>
//               <FaPowerOff className="text-xl" />
//             </Button>
//           </div>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Options;
"use client";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "@/context/SocketContext";
import {
  FaMicrophoneSlash,
  FaVideoSlash,
  FaVideo,
  FaPowerOff,
  FaMicrophone,
} from "react-icons/fa";
import { app } from "@/app/api/firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Options = ({ children, type }) => {
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, `users/${userId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setName(data.name);
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
        // Check local storage for user data
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser && currentUser.displayName) {
          setName(currentUser.displayName);
        } else {
          fetchUserData(user.uid);
        }
      }
    });
  }, [setName]);

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
        }}
      >
        {!callAccepted && !callEnded && type === "guest" && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <h6>Joining As</h6>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly
                placeholder="Name"
              />
            </div>
            <div style={{ padding: "10px" }}>
              <h6>Make a call</h6>
              <Input
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="ID to call"
              />
              <Button onClick={handleCallUser}>Join</Button>
            </div>
          </div>
        )}
        {!callAccepted && !callEnded && type === "host" && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <h6>Hosting As</h6>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly
                placeholder="Name"
              />
                <h6>
                  Share this ID with your guest to join the call: {me}
                  <CopyToClipboard text={me} onCopy={() => setCopied(true)}>
                    <Button>{copied ? "Copied" : "Copy Your ID"}</Button>
                  </CopyToClipboard>
                </h6>
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
            <Button onClick={toggleAudio}>
              {audioMuted ? (
                <FaMicrophoneSlash className="text-xl" />
              ) : (
                <FaMicrophone className="text-xl" />
              )}
            </Button>
            <Button onClick={toggleVideo}>
              {videoMuted ? (
                <FaVideoSlash className="text-xl" />
              ) : (
                <FaVideo className="text-xl" />
              )}
            </Button>
            <Button onClick={leaveCall}>
              <FaPowerOff className="text-xl" />
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Options;
