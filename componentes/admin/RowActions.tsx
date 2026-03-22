"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  id: string;
  estado: "pendiente" | "reservado" | "vendido";
};

export default function RowActions({ id, estado }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // cerrar al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary-container transition-all flex items-center gap-2 ml-auto"
      >
        <span>Gestionar</span>
        <span className="material-symbols-outlined text-sm">
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-surface border border-outline-variant/20 rounded-xl shadow-lg overflow-hidden z-50">
          
          {estado === "pendiente" && (
            <>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors">
                Confirmar pago
              </button>

              <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors">
                Cancelar
              </button>
            </>
          )}

          {estado === "reservado" && (
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors">
              Marcar como vendido
            </button>
          )}

          <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors">
            Ver detalles
          </button>
        </div>
      )}
    </div>
  );
}