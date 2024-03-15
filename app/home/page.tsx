import { Button } from '@/components/ui/button';
import React from 'react';
import Navbar from './navbar';
// import {Join} from "@/app/home/join"

const LandingPage = () => {
    

    return (
        <div className="flex min-h-screen px-8">
            <Navbar/>
            
            <div className="flex flex-col justify-center w-1/2 p-8">
                <h1 className="text-5xl font-bold mb-2">Collaborate, Build, Enjoy!</h1>
                <div className="mt-4">
                    <Button className="mr-4">Join a meet</Button>
                    <Button variant="secondary">Host a meet</Button>
                </div>
            {/* <Join /> */}

                

            </div>
        </div>
            
    );
};

export default LandingPage;
