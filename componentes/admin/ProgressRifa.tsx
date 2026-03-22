"use client";

export default function ProgressRifa({ actual, total }: { actual: number; total: number }) {
    const percent = (actual / total) * 100;

    return (
        <div className="mt-8 z-10">
            <div className="flex justify-between items-end mb-2">
                <span className="text-4xl font-serif font-bold">
                    {actual}
                    <span className="text-lg opacity-60">
                        / {total}
                    </span>
                </span>

                <span className="text-sm font-bold">
                    {percent.toFixed(0)}%
                </span>
            </div>

            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div
                    className="bg-tertiary-fixed h-full  bg-amber-200 transition-all duration-500"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}