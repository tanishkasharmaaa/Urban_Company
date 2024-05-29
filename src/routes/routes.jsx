import { Route,Routes } from "react-router-dom"
import { Home } from "../pages/home"

import { SalonForWomen } from "../pages/Salon/SalonForWomen"
import { SpaForWomen } from "../pages/Salon/SpaForWomen"

import { MakeUp } from "../pages/Salon/MakeUp"
import { SalonForKidMen } from "../pages/MensSalon/SalonForKidMen"
import { MassageForMen } from "../pages/MensSalon/MassageForMen"
import {AcRepair} from '../pages/AC/AcRepair'
import {LaptopRepair} from '../pages/AC/LaptopRepair'
import {Refrigrator} from '../pages/AC/Refrigrator'
import { Sofa } from "../pages/Cleaning/Sofa"
import { HouseCleaning } from "../pages/Cleaning/HouseCleaing"
import { Electrician } from "../pages/Electrician&Plumber/electrician"
import { Plumber } from "../pages/Electrician&Plumber/plumber"
import { WaterPurifier } from "../pages/WaterPrurifier/waterPurifier"
import { CartSalonForWomen } from "../Carts/cartSalonForWomen"

import { CartMakeUp } from "../Carts/cartMakeUp"
import { CartSpaForWomen } from "../Carts/cartSpaForWomen"
import { CartMassageForMen } from "../Carts/cartMassageForMen"
import { CartSalonForKidMen } from "../Carts/cartSalonForKidMen"
import { CartElectrician } from "../Carts/cartElectrician"

import { CartPlumber } from "../Carts/cartPlumber"
import { CartAcRepair } from "../Carts/cartAcRepair"
import { CartLaptopRepair } from "../Carts/cartLaptopRepair"
import { CartRefrigrator } from "../Carts/cartRefrigrator"
import { CartWaterPurifier } from "../Carts/cartWaterPurifier"
import { CartSofa } from "../Carts/cartSofa"
import { CartHouseCleaning } from "../Carts/cartHouseCleaning"
export function RoutesPage(){
    return(
        <>
        <Routes>
<Route path="/" element={<Home/>} />

<Route path="/MakeUpStudio" element={<MakeUp/>}/>
<Route path="/SalonForMen" element={<SalonForKidMen/>}/>
<Route path="/MassageForMen" element={<MassageForMen/>} />
<Route path="/AcRepair" element={<AcRepair/>}/>
<Route path="/LaptopRepair" element={<LaptopRepair/>}/>
<Route path="/Refrigerator" element={<Refrigrator/>}/>
<Route path="/Sofa" element={<Sofa/>}/>
<Route path="/HouseCleaning" element={<HouseCleaning/>}/>
<Route path="/Electrician" element={<Electrician/>}/>
<Route path="/Plumber" element={<Plumber/>}/>
<Route path="/MassageForMen" element={<MassageForMen/>}/>
<Route path="/MakeUp" element={<MakeUp/>}/>
<Route path="/SalonForWomen" element={<SalonForWomen/>}/>
<Route path="/SpaForWomen" element={<SpaForWomen/>}/>
<Route path="/waterPurifier" element={<WaterPurifier/>}/>
<Route path="/paymentSalonForWomenCart" element={<CartSalonForWomen/>}/>
<Route path="/paymentSpaForWomenCart" element={<CartSpaForWomen/>}/>
<Route path="/paymentMakeUpCart" element={<CartMakeUp/>}/>
<Route path="/paymentMassageForMen" element={<CartMassageForMen/>}/>
<Route path="/paymentSalonForKidMen" element={<CartSalonForKidMen/>}/>
<Route path="/paymentElectrician" element={<CartElectrician/>}/>
<Route path="/paymentPlumber" element={<CartPlumber/>}/>
<Route path="/paymentAcRepair" element={<CartAcRepair/>}/>
<Route path="/paymentLaptopRepair" element={<CartLaptopRepair/>}/>
<Route path="/paymentRefrigerator" element={<CartRefrigrator/>}/>
<Route path="/paymentWaterPurifier" element={<CartWaterPurifier/>}/>
<Route path="/paymentSofa" element={<CartSofa/>}/>
<Route path="/paymentHouseCleaning" element={<CartHouseCleaning/>}/>
  </Routes>
        </>
    )
}