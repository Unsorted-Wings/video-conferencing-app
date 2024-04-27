import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage = () => {


    return (
        <div className="flex min-h-screen px-8">
            <Navbar />

            <div className="flex flex-col justify-center w-1/2 p-8">
                <h1 className="text-[2.5rem] font-bold mb-2">Collaborate, Build, Enjoy!</h1>
                <div className="mt-2">
                    {/* <Button className="mr-4 px-4 py-5 text-lg">Join a meet</Button>
                    <Button variant="secondary">Host a meet</Button> */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-4 py-5 text-lg">Join a meet</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Join Meet</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        defaultValue="Joe Doe"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="link" className="text-right">
                                        Link
                                    </Label>
                                    <Input
                                        id="link"
                                        placeholder="Enter link"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="m-auto min-w-[30%] rounded-lg">Join</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Button variant="secondary" className="ml-6 px-4 py-5 text-lg">Host a meet</Button>

                </div>



            </div>
            <div className="flex flex-col justify-center items-center w-1/2 p-8">
                <h1 className="text-7xl font-bold mb-2 font-mono">Collab</h1>
            </div>

        </div>

    );
};

export default LandingPage;
