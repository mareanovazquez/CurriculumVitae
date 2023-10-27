import { useEffect, useState } from "react";


export const LoadingBarHtml = () => {

    const [percentageHtml, setPercentageHtml] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageHtml < 71) {
                setPercentageHtml(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (35 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageHtml]);

    return (
        <>
            <div className="levelHtml" style={{ width: `${percentageHtml}%` }}></div>
            <div className="percentageHtml">{percentageHtml}%</div>
        </>
    )

}