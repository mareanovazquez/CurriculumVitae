import { useEffect, useState } from "react";


export const LoadingBarLanguage = () => {

    const [percentageLanguage, setPercentageLanguage] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageLanguage < 55) {
                setPercentageLanguage(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (55 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageLanguage]);

    return (
        <>
            <div className="levelLanguage" style={{ width: `${percentageLanguage}%` }}></div>
            <div className="percentageLanguage d-none">{percentageLanguage}%</div>
        </>
    )

}