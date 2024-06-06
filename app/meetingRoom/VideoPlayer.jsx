"use client";
import { SocketContext } from '@/context/SocketContext';
import React, { useEffect, useRef,useContext } from 'react';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  

    return (

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {
                stream && (
                    <div style={{ padding: '10px', border: '2px solid black', margin: '10px' }}>
                        <div>
                            <h5>{name || 'Name'}</h5>
                            <video playsInline muted ref={myVideo} autoPlay style={{ width: '550px' }} />
                        </div>
                    </div>
                )
            }
            {
                callAccepted && !callEnded &&(
                  <div style={{ padding: '10px', border: '2px solid black', margin: '10px' }}>
                        <div>
                            <h5>{call.name || 'Name'}</h5>
                            <video playsInline ref={userVideo} autoPlay style={{ width: '550px' }} />
                        </div>
                    </div>
                )

                
            }
            
        </div>
    );
};

export default VideoPlayer;
