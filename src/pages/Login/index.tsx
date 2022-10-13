import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';

export const Login = () => {
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
      <Link to="/">
        <BiArrowBack color="rgb(13 148 136)" size={35}/>
      </Link>
      <h3 className="text-white text-2xl text-center mb-4 font-medium">Sing In</h3>
      <p className="text-slate-600 font-light text-center">Sing in quickly using</p>
      <div className="flex flex-row justify-between items-center mt-4">
        <button className="border-slate-600 border-x rounded-md border-y flex justify-center items-center p-3 w-36 gap-2 hover:bg-teal-600 hover:text-slate-300 transition text-slate-600">
          <FaFacebookF size={14} color="rgb(51 65 85)"/>
            facebook
        </button >
        <button className="border-slate-600 border-x rounded-md border-y flex justify-center items-center p-3 w-36 gap-2 hover:bg-teal-600 hover:text-slate-300 transition text-slate-600">
          <FaTwitter size={14} color="rgb(51 65 85)"/>
            twitter
        </button>
      </div>
      <div className="flex flex-row justify-between items-center gap-2 my-4">
        <div className="line w-1/4"></div>
        <p className="w-2/4 text-center text-slate-600 font-light">Or use your email</p>
        <div className="line w-1/4"></div>
      </div>
      <div className="w-full rounded-md">
        <input type="text" placeholder="Email" className="text-slate-300 bg-slate-700 w-full rounded-md mb-5 border-transparent placeholder:text-slate-600 p-2 focus:border-slate-300 focus:shadow-transparent focus:ring-transparent" />
      </div>
      <div className="w-full rounded-md">
        <input type="text" placeholder="Password" className="text-slate-300 bg-slate-700 w-full rounded-md mb-3 border-transparent placeholder:text-slate-600 p-2 focus:border-slate-300 focus:shadow-transparent focus:ring-transparent" />
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-2">
          <input type="checkbox" className="appearance-none checked:bg-teal-600 focus:checked:bg-teal-600 hover:bg-transparente hover:text-teal-600 focus:border-teal-600 focus:ring-transparent"/>
          <span className="text-slate-600 font-light text-sm">Remeber me</span>
        </div>
        <span className="text-slate-600 font-light text-sm">Forgot Password</span>
      </div>
      <button className="bg-teal-600 w-full p-3 my-6 text-white rounded-md hover:bg-teal-500 transition">
        Login
      </button>
      <p className="text-center text-slate-600">Not a member? Sing Up</p>
    </div>
  </div>
  )
}
