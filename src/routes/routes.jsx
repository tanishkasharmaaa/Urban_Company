import { Route,Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { SalonForWomen } from "../pages/Salon/SalonForWomen"
import { SpaForWomen } from "../pages/Salon/SpaForWomen"

import { MakeUp } from "../pages/Salon/MakeUp"
import { SalonForKidMen } from "../pages/MensSalon/SalonForKidMen"
import { MassageForMen } from "../pages/MensSalon/MassageForMen"
import {AcRepair} from '../pages/AC/AcRepair'
import {LaptopRepair} from '../pages/AC/LaptopRepair'
import {Refrigrator} from '../pages/AC/Refrigrator'
import { BathRoom } from "../pages/Cleaning/BathRoom"
import { HouseCleaning } from "../pages/Cleaning/HouseCleaing"
import { Electrician } from "../pages/Electrician&Plumber/electrician"
import { Plumber } from "../pages/Electrician&Plumber/plumber"
import { WaterPurifier } from "../pages/WaterPrurifier/waterPurifier"
import { CartSalonForWomen } from "../Carts/cartSalonForWomen"
export function RoutesPage(){
    return(
        <>
        <Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>}/>



<Route path="/MakeUpStudio" element={<MakeUp/>}/>
<Route path="/SalonForMen" element={<SalonForKidMen/>}/>
<Route path="/MassageForMen" element={<MassageForMen/>} />
<Route path="/AcRepair" element={<AcRepair/>}/>
<Route path="/LaptopRepair" element={<LaptopRepair/>}/>
<Route path="/Refrigerator" element={<Refrigrator/>}/>
<Route path="/Bathroom" element={<BathRoom/>}/>
<Route path="/HouseCleaning" element={<HouseCleaning/>}/>
<Route path="/electrician" element={<Electrician/>}/>
<Route path="/plumber" element={<Plumber/>}/>
<Route path="/MassageForMen" element={<MassageForMen/>}/>
<Route path="/MakeUp" element={<MakeUp/>}/>
<Route path="/SalonForWomen" element={<SalonForWomen/>}/>
<Route path="/SpaForWomen" element={<SpaForWomen/>}/>
<Route path="/waterPurifier" element={<WaterPurifier/>}/>
<Route path="/cartSalonForWomen" element={<CartSalonForWomen/>}/>
  </Routes>
        </>
    )
}