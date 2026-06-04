import { useState } from "react";
import intrSvg from "../img/intr.svg";
import vectorSvg from "../img/Vector.svg";

export default function Header() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    return (
        <div
            className="relative flex items-center px-8 w-full"
            style={{
                height: 150,
                background: "rgba(255, 255, 255, 0.67)",
                boxShadow:
                    "0px 4px 24px rgba(0,0,0,0.12), inset 0px 12px 24px rgba(0,0,0,0.12)",
                overflow: "visible",
            }}
        >
            <img
                src={vectorSvg}
                alt=""
                className="absolute pointer-events-none select-none -z-10"
                style={{
                    width: 689,
                    height: 382,
                    left: -90,
                    top: -20.5,
                }}
            />

            <div className="relative z-10 ml-52 shrink-0">
                <img src={intrSvg} alt="Logo" className="w-[118px] h-[118px]" />
            </div>

            <div className="relative z-10 ml-40 flex flex-col gap-5 mt-5">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        monblanproject
                    </h1>

                    <span className="px-3 py-1 border border-blue-500 text-blue-500 text-sm font-medium">
                        Started on 17.02.2016
                    </span>
                </div>

                <div className="flex gap-10 text-gray-700">
                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-sm text-gray-900">
                            123
                        </span>
                        <span>posts</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-sm text-gray-900">
                            123
                        </span>
                        <span>followers</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-sm text-gray-900">
                            112
                        </span>
                        <span>following</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-medium text-gray-700">From:</span>

                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                    />

                    <span className="font-medium text-gray-700">To:</span>

                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                    />
                </div>
            </div>
        </div>
    );
}
