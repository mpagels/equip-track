import type {Equipment} from "../types/equipment.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import "../styles/EquipmentDetailsPage.css"

export default function EquipmentDetailPage() {

    const [equipment, setEquipment] = useState<Equipment>()

    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/equipment/${id}`).then(res => setEquipment(res.data))
    })


    if (!equipment) {
        return <div className="details-container">
            <h2 className="error">LOADING</h2>
        </div>
    } else {
        return <div className="details-container">
            <h1 className="title">Gerätedetails</h1>
            <div className="card">
                <p><strong>Name:</strong> {equipment.name}</p>
                <p><strong>SKU:</strong> {equipment.sku}</p>
                <p><strong>Kategorie:</strong> {equipment.category}</p>
                <p><strong>Bestand:</strong> {equipment.stock}</p>
                <p>
                    <strong>Status:</strong>{" "}
                    <span>
            {equipment.status}
          </span>
                </p>
            </div>
            <button className="button" onClick={() => navigate(-1)}>
                Zurück zur Übersicht
            </button>
        </div>
    }

}