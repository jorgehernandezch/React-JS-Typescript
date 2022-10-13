import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

export const Home = () =>{
  return(
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center">
      <div className="
          2xl:w-1/3
          xl:w-1/3 
          lg:w-1/3 
          md:w-1/2 
          sm:w-9/12 
          w-9/12 
          p-8
          mx-auto
          my-auto"
      >
        <h3 className="text-white text-2xl text-center font-medium mb-1">JORGE EDO. HERNÁNDEZ</h3>
        <p className="text-center text-slate-600 mb-4">Software Engineer</p>
        <p className="text-slate-600 font-light text-center">Pages developed with the following technologies</p>
        <div className="w-full flex flex-row justify-center items-center gap-3 mt-3 mb-9">
          <FaReact color="rgb(103 232 249)" size={40}/>
          <SiTailwindcss color="rgb(96 165 250)" size={40}/>
          <SiVite color="rgb(217 119 6)" size={40}/>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <Link to="/login">
            <button className="border-slate-600 border-x rounded-md border-y flex justify-center items-center p-3 w-36 gap-2 hover:bg-teal-600 hover:text-slate-300 transition text-slate-600">
                Login
            </button >
          </Link>
          
          {/* <button className="border-slate-600 border-x rounded-md border-y flex justify-center items-center p-3 w-36 gap-2 hover:bg-teal-600 hover:text-slate-300 transition text-slate-600">
            <FaTwitter size={14} color="rgb(51 65 85)"/>
              twitter
          </button> */}
        </div>
        
      </div>
    </div>
  )
}
