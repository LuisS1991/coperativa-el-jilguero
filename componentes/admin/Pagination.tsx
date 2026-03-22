"use client";

type Props = {
  page: number;
  total: number;
  perPage?: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  page,
  total,
  perPage = 10,
  onChange,
}: Props) {
  const totalPages = Math.ceil(total / perPage);

  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  return (
    <div className="px-8 py-6 bg-surface-container-high/20 border-t border-outline-variant/5 flex justify-between items-center">
      
      <p className="text-xs font-semibold text-on-surface-variant">
        Mostrando {start}-{end} de {total} solicitudes
      </p>

      <div className="flex gap-2">
        
        {/* prev */}
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-sm">
            chevron_left
          </span>
        </button>

        {/* pages */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const p = i + 1;

          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors
                ${
                  page === p
                    ? "bg-primary text-on-primary"
                    : "hover:bg-surface-container-high"
                }
              `}
            >
              {p}
            </button>
          );
        })}

        {/* next */}
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>

      </div>
    </div>
  );
}

/*

"use client";

import { useState } from "react";
import Pagination from "./Pagination";

export default function TableWrapper({ data }) {
  const [page, setPage] = useState(1);

  const perPage = 4;

  const start = (page - 1) * perPage;
  const paginated = data.slice(start, start + perPage);

  return (
    <>
       tabla 
      {paginated.map((row) => (
        <div key={row.id}>{row.nombre}</div>
      ))}

      <Pagination
        page={page}
        total={data.length}
        perPage={perPage}
        onChange={setPage}
      />
    </>
  );
}*/