import {useEffect, useState} from "react";
import type {Equipment} from "../types/equipment.ts";
import axios from "axios";
import EquipmentTable from "../components/EquipmentTable.tsx";

export default function StartPage() {
    const [equipment, setEquipment] = useState<Equipment[]>([]);

    useEffect(() => {
        axios.get("/api/equipment").then(res => setEquipment(res.data));
    })

    return (
        <main className="p-4">
            <h1 className="text-xl font-semibold mb-4">IT Equipment Übersicht</h1>
            <EquipmentTable data={equipment}/>
        </main>
    )
}
