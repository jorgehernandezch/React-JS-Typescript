import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Home as HomeTailwind } from "./pages/Tailwind/home";
import { Login as LoginTailwind } from "./pages/Tailwind/login";

export function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tailwind/home' element={<HomeTailwind/>} />
        <Route path='/tailwind/login' element={<LoginTailwind/>} />
      </Routes>
    </BrowserRouter>
  )
}