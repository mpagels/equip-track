import './App.css'
import {Route, Routes} from "react-router";
import StartPage from "./pages/startpage.tsx";
import EquipmentDetailsPage from "./pages/equipmentDetailsPage.tsx";

export default function App() {

    return <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/equipmentDetail/:id" element={<EquipmentDetailsPage />} />
    </Routes>
}


