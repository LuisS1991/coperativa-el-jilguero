"use client";

import { useState } from "react";
import TableSearch from "./TableSearch";
import RowActions from "./RowActions";

export default function SolicitudesTable({ data }: { data: any }) {
    const [search, setSearch] = useState("");

    const filtered = data.filter((item: any) =>
        item.nombre.toLowerCase().includes(search.toLowerCase()) ||
        item.numero.toString().includes(search)
    );

    return (
        <>
            <div className="px-8 py-6 flex justify-between items-center">
                <h2 className="font-serif text-2xl text-primary">
                    Solicitudes Recientes
                </h2>

                <TableSearch onSearch={setSearch} />
            </div>

            <tbody>
                {filtered.map((row: any) => (
                    <tr key={row.id}>
                        <td>{row.nombre}</td>
                        <td>{row.numero}</td>
                        <td>
                            <RowActions id={row.id} estado={row.estado} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}