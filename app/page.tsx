import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-00 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Video Conferencing App</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              Contact
            </a>
          </div>
          <Button className="w-20 p-2">SignIn</Button>
        </div>
      </nav>
      <div className="flex min-h-screen w-full p-10">
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold">Collab</h1>
          <p className="text-gray-500 text-lg ml-2 mb-4">A video conferencing app</p>
          <div>
            <Button variant={"secondary"} className="w-1/6 p-5">Join a meet</Button>
            <Button variant={"secondary"} className="w-1/6 p-5 ml-5">Host a meet</Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center text-3xl text-slate-400">logo</div>
      </div>
    </div>
  );
}
