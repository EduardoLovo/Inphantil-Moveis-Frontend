import React from 'react';
import './DesenhosSVG.css';
export const NuvemSVG = ({ color, color2, onClick }) => {
    return (
        <div className="contentSVG">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300mm"
                height="60mm"
                fill-rule="evenodd"
                clip-rule="evenodd"
                image-rendering="optimizeQuality"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                version="1.0"
                viewBox="0 0 37000 10000"
                style={{ cursor: 'pointer' }}
            >
                <g
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="22.926"
                    stroke-width="20"
                >
                    <path
                        id="cor1"
                        fill={color}
                        stroke="black"
                        strokeWidth="70.56"
                        onClick={onClick}
                        d="M7256.29 1961.6c1845.33-876.67 3811.72-125.2 4596.37 873.53-303.91 237.25-581.43 534.45-810.99 902.8-1769.45-65.5-3024.44 1070.89-3296.64 2482.42-637.9 139.85-1247.79 799.8-1247.79 1183.85v1561H820.37v-1561c6-1172.66 453.8-2681.65 1674.73-3292.13C2675.49 2237.83 5338.12 992.02 7256.29 1961.6zM28455.98 1929.15c598.71-467.29 1432-757.08 2353.49-757.08 1627.26 0 3017.19 977.33 3288.37 2166.3 1308.47 372.08 2167.69 1718.19 1871.71 3097.59 229.56 254.32 380.31 755.75 380.31 999.91V8965.2h-7985.28V7404.22c0-1431.7-1049.31-2581.77-2831.1-2794.54-187.66-627.6-686.57-1203.17-1344.56-1627.76 946.79-1108.64 2948.45-1514.7 4267.06-1052.77z"
                    />
                    <path
                        id="cor2"
                        fill={color2}
                        stroke="black"
                        strokeWidth="70.56"
                        onClick={onClick} // Aplica a cor ao clicar
                        d="M16205.91 2155.97c1263.66-1216.68 4170.87-1266.4 5163.37 123.33 1813.16-190.29 3749.33 942.89 4164.2 2330.38 1781.79 212.77 2831.1 1362.84 2831.1 2794.54V8965.2H13415.79V2283.51c1103.79-383.94 2251.44-321.84 2790.12-127.54zM11041.67 3737.93c464.14-744.74 1124.29-1198.6 1802.39-1454.42V8965.2H6497.24v-1561c0-384.05 609.89-1044 1247.79-1183.85 272.2-1411.53 1527.19-2547.92 3296.64-2482.42z"
                    />
                </g>
            </svg>
        </div>
    );
};
