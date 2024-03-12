"use client"

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Join from './join';

const LandingPage = () => {
    // State to store the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Function to update the current time
    const updateCurrentTime = () => {
        setCurrentTime(new Date());
    };

    // Effect to update the time every minute
    useEffect(() => {
        const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Function to get the day of the week
    const getDayOfWeek = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek[currentTime.getDay()];
    };

    return (
        <div className="flex min-h-screen p-8">
            <div className="flex flex-col justify-center w-1/2 p-8">
                <h1 className="text-5xl font-bold mb-2">Collaborate, Build, Enjoy!</h1>
                <div className="mt-4">
                    <Button className="mr-4">Join a meet</Button>
                    <Button variant="secondary">Host a meet</Button>
                </div>

                <div className="flex mt-4 text-slate-500 text-lg items-center">
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    <Separator orientation='vertical' className='mx-2' />
                    {getDayOfWeek()}
                </div>

            </div>
        </div>
    );
};

export default LandingPage;
