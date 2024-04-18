import { useEffect, useState } from "react";


export const LoadingBarRedaccion = () => {

    const [percentageRedaccion, setPercentageRedaccion] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageRedaccion < 88) {
                setPercentageRedaccion(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (25 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageRedaccion]);

    return (
        <>
            <div className="levelRedaccion" style={{ width: `${percentageRedaccion}%` }}></div>
            <div className="percentageRedaccion d-none">{percentageRedaccion}%</div>
        </>
    )

}