"use client";

import { useState, useEffect } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export default function TableSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");

  // debounce (evita filtrar en cada tecla)
  useEffect(() => {
    const t = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => clearTimeout(t);
  }, [value, onSearch]);

  return (
    <div className="relative group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
        search
      </span>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar comprador o número..."
        className="pl-10 pr-4 py-2 bg-surface-container-highest/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-64 transition-all"
      />
    </div>
  );
}