import { useEffect, useState } from "react";

export const LoadingBarEdicion = () => {

    const [percentageEdicion, setPercentageEdicion] = useState(0);
    useEffect(() => {
        function increasePercentage() {
            if (percentageEdicion < 82) {
                setPercentageEdicion(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (40 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageEdicion]);

    return (
        <>
            <div className="levelEdicion" style={{ width: `${percentageEdicion}%` }}></div>
            <div className="percentageEdicion d-none">{percentageEdicion}%</div>
        </>
    )
}