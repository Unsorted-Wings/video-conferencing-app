// "use client";
// import React, { createContext, useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
// import Peer from 'simple-peer';

// const SocketContext = createContext();
// const socket = io("http://localhost:5000");

// const ContextProvider = ({ children }) => {

//     const [stream, setStream] = useState(null);
//     const [me, setMe] = useState("");
//     const [call, setCall] = useState({});
//     const [callAccepted, setCallAccepted] = useState(false);
//     const [callEnded, setCallEnded] = useState(false);
//     const [name, setName] = useState("");

//     const myVideo = useRef();
//     const userVideo = useRef();
//     const connectionRef = useRef();

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((currentStream) => {
//                 setStream(currentStream);
//                 if (myVideo.current) {
//                     myVideo.current.srcObject = currentStream;
//                 }
//             });
//         socket.on("me", (id) => {
//             setMe(id);
//         });
//         socket.on("callUser", ({ from, name: callerName, signal }) => {
//             setCall({ isReceivedCall: true, from, name: callerName, signal });
//         });
//     }, []);
    
//     const answerCall = () => {
//         setCallAccepted(true);

//         const peer = new Peer({ initiator: false, trickle: false, stream });

//         peer.on("signal", (data) => {
//             socket.emit("answerCall", { signal: data, to: call.from });
//         });

//         peer.on("stream", (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });

//         peer.signal(call.signal);

//         connectionRef.current = peer;
//     };

//     // const callUser = (id) => {
//     //     console.log("Hello from callUser function");
//     //     const peer = new Peer({ initiator: true, trickle: false, stream });


//     //     peer.on("signal", (data) => {
//     //         socket.emit("callUser", { userToCall: id, signalData: data, from: me, name });
//     //     });

//     //     peer.on("stream", (currentStream) => {
//     //         userVideo.current.srcObject = currentStream;
//     //     });

//     //     socket.on("callAccepted", (signal) => {
//     //         setCallAccepted(true);
//     //         peer.signal(signal);
//     //     });

//     //     connectionRef.current = peer;
//     // };
//     const callUser = (id) => {
//         if (!id || !me) {
//             console.error("Missing user ID or own ID");
//             return;
//         }
    
//         const peer = new Peer({ initiator: true, trickle: false, stream });
    
//         peer.on("signal", (data) => {
//             socket.emit("callUser", { userToCall: id, signalData: data, from: me, name });
//         });
    
//         peer.on("stream", (currentStream) => {
//             userVideo.current.srcObject = currentStream;
//         });
    
//         socket.on("callAccepted", (signal) => {
//             setCallAccepted(true);
//             peer.signal(signal);
//         });
    
//         peer.on("error", (err) => {
//             console.error("Peer error:", err);
//         });
        
//         connectionRef.current = peer;
//     };

//     const leaveCall = () => {
//         setCallEnded(true);
//         connectionRef.current.destroy();
//         window.location.reload();
//     };

//     return (
//         <SocketContext.Provider value={{ call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall }}>
//             {children}
//         </SocketContext.Provider>
//     );
// };

// export { ContextProvider, SocketContext };
"use client";
import React, { createContext, useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Peer from 'simple-peer';

const SocketContext = createContext();
const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {

    const [stream, setStream] = useState(null);
    const [me, setMe] = useState("");
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //         .then((currentStream) => {
    //             setStream(currentStream);
    //             if (myVideo.current) {
    //                 myVideo.current.srcObject = currentStream;
    //             }
    //         });

    //     const handleMe = (id) => setMe(id);
    //     const handleCallUser = ({ from, name: callerName, signal }) => {
    //         setCall({ isReceivedCall: true, from, name: callerName, signal });
    //     };

    //     socket.on("me", handleMe);
    //     socket.on("callUser", handleCallUser);

    //     return () => {
    //         socket.off("me", handleMe);
    //         socket.off("callUser", handleCallUser);
    //     };
    // }, []);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);
                if (myVideo.current) {
                    myVideo.current.srcObject = currentStream;
                }
            });
    
        const handleMe = (id) => {
            console.log("Connected as:", id);
            setMe(id);
        };
        const handleCallUser = ({ from, name: callerName, signal }) => {
            console.log("Receiving call from:", from);
            setCall({ isReceivedCall: true, from, name: callerName, signal });
        };
    
        socket.on("me", handleMe);
        socket.on("callUser", handleCallUser);
    
        return () => {
            socket.off("me", handleMe);
            socket.off("callUser", handleCallUser);
        };
    }, []);
    

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: call.from });
        });

        peer.on("stream", (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {
        if (!id || !me) {
            console.error("Missing user ID or own ID");
            return;
        }

        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on("signal", (data) => {
            socket.emit("callUser", { userToCall: id, signalData: data, from: me, name });
        });

        peer.on("stream", (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        peer.on("error", (err) => {
            console.error("Peer error:", err);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        if (connectionRef.current) {
            connectionRef.current.destroy();
        }
        window.location.reload();
    };

    return (
        <SocketContext.Provider value={{ call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall }}>
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };
