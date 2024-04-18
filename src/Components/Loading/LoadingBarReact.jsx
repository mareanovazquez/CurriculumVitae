import { useEffect, useState } from "react";


export const LoadingBarReact = () => {

    const [percentageReact, setPercentageReact] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageReact < 65) {
                setPercentageReact(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (30 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageReact]);

    return (
        <>
            <div className="levelReact" style={{ width: `${percentageReact}%` }}></div>
            <div className="percentageReact d-none">{percentageReact}%</div>
        </>
    )

}