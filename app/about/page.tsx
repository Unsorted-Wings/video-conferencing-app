import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Umar from '@/public/images/umar.jpg';
import Tirth from '@/public/images/tirth.jpg';
import Rohit from '@/public/images/rohit.jpg';

const AboutPage = () => {
    return (
        <div className="flex h-screen">
            <Navbar />
            <div className="flex w-full p-8">
                <div className="w-1/2 p-6 text-justify">
                    <h1 className="text-4xl font-bold mb-6">About Collab</h1>
                    <p className="mb-6 text-lg leading-relaxed">
                        Collab is a video conferencing application designed to provide seamless communication and collaboration experiences for teams and individuals. With Collab, you can easily host and join meetings, share screens, exchange messages, and more.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Our mission is to empower teams and individuals to connect and collaborate effectively regardless of their location. Whether you&apos;re working remotely, managing a distributed team, or conducting virtual meetings, Collab is your go-to solution for productive and engaging communication.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Thank you for choosing Collab as your video conferencing platform. We are committed to continually improving our services and features to enhance your collaboration experience.
                    </p>
                    <div className="flex justify-center">
                        <Button variant="secondary" className="px-4 py-5 text-lg">Join a meet</Button>
                    </div>
                </div>

                <div className="w-1/2 p-6" >
                    <h2 className="text-2xl font-bold my-8">Our Team</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <Image src={Tirth} alt="Team Member 1" width={128} height={128} className="rounded-full mb-4" />
                            <p className="text-lg font-bold">Tirth Patel</p>
                            <p className="text-lg text-gray-500">Frontend Developer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={Umar} alt="Team Member 1" width={128} height={128} className="rounded-full mb-4" />
                            <p className="text-lg font-bold">Mhd. Umar</p>
                            <p className="text-lg text-gray-500">Backend Developer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={Rohit} alt="Team Member 1" width={128} height={128} className="rounded-full mb-4" />
                            <p className="text-lg font-bold">Rohit Shukla</p>
                            <p className="text-lg text-gray-500">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;