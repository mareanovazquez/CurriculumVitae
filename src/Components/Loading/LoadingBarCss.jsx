import { useEffect, useState } from "react";


export const LoadingBarCss = () => {

    const [percentageJS, setPercentageJS] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageJS < 65) {
                setPercentageJS(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (20 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageJS]);

    return (
        <>
            <div className="levelJS" style={{ width: `${percentageJS}%` }}></div>
            <div className="percentageJS d-none">{percentageJS}%</div>
        </>
    )

}