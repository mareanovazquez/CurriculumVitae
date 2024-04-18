import { useEffect, useState } from "react";


export const LoadingBarJavascript = () => {

    const [percentageCss, setPercentageCss] = useState(0)

    useEffect(() => {
        function increasePercentage() {
            if (percentageCss < 68) {
                setPercentageCss(prevPercentage => prevPercentage + 1);
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(increasePercentage, (22 * 80 / 100));

        return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente

    }, [percentageCss]);

    return (
        <>
            <div className="levelCss" style={{ width: `${percentageCss}%` }}></div>
            <div className="percentageCss d-none">{percentageCss}%</div>
        </>
    )

}