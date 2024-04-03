import React from 'react';
import Navbar from '@/components/navbar';

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
                        Our mission is to empower teams and individuals to connect and collaborate effectively regardless of their location. Whether you're working remotely, managing a distributed team, or conducting virtual meetings, Collab is your go-to solution for productive and engaging communication.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Thank you for choosing Collab as your video conferencing platform. We are committed to continually improving our services and features to enhance your collaboration experience.
                    </p>
                    <div className="flex justify-center">
                        <img src="/collab-logo.png" alt="Collab Logo" className="w-32 h-32" />
                    </div>
                </div>

                <div className="w-1/2 p-6" >
                    <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mb-4" />
                            <p className="text-lg font-bold">John Doe</p>
                            <p className="text-lg text-gray-500">CEO & Co-founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/team-member-2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mb-4" />
                            <p className="text-lg font-bold">Jane Doe</p>
                            <p className="text-lg text-gray-500">CTO & Co-founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/team-member-3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mb-4" />
                            <p className="text-lg font-bold">Alice Doe</p>
                            <p className="text-lg text-gray-500">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;