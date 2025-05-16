import type {Equipment} from "../types/equipment.ts";
import {Link} from "react-router";
import "../styles/EquipmentTable.css"

type Props = {
    data: Equipment[];
};

export default function EquipmentTable({ data }:Props)  {
    return (
        <div className="table-container">
            <table className="equipment-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Kategorie</th>
                    <th>Bestand</th>
                    <th>Status</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {data.length > 0 ?

                    data.map((eq) => (
                        <tr key={eq.id}>
                            <td>{eq.name}</td>
                            <td>{eq.sku}</td>
                            <td>{eq.category}</td>
                            <td>{eq.stock}</td>
                            <td>
                <span className={`status ${eq.status}`}>
                  {eq.status}
                </span>
                            </td>
                            <td>
                                <Link className="details-link" to={`/equipmentDetail/${eq.id}`}>
                                    Ansehen
                                </Link>
                            </td>
                        </tr>
                    )) : <div>Keine Daten</div>}               </tbody>
            </table>
        </div>
    );
};