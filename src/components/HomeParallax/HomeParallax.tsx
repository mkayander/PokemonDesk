import React, { useEffect, useState } from "react";

import styles from "./HomeParallax.module.scss";

import SmallPokeBallPng from "./assets/SmallPokeBall.url.svg";
import CloudPng from "./assets/SmallCloud.url.svg";
import PokeBallPng from "./assets/BigPokeBall.url.svg";
import CloudBigPng from "./assets/BigCloud.url.svg";
import PikachuPng from "./assets/Pikachu_svg.url.svg";

type MousePos = {
    X: number;
    Y: number;
};

const Parallax = () => {
    const [mousePos, setMousePos] = useState<MousePos>({ X: 0, Y: 0 });

    const calculateMouseTranslate = (multiplier: number) =>
        `translate(${mousePos.X * multiplier}px, ${mousePos.Y * multiplier}px)`;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                X: event.screenX,
                Y: event.screenY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className={styles.root}>
            <div
                className={styles.smallPokeBall}
                style={{
                    transform: calculateMouseTranslate(0.04),
                }}>
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div
                className={styles.cloud}
                style={{
                    transform: calculateMouseTranslate(0.08),
                }}>
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div
                className={styles.cloudBig}
                style={{
                    transform: calculateMouseTranslate(0.07),
                }}>
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>
            <div
                className={styles.pokeBall}
                style={{
                    transform: calculateMouseTranslate(0.02),
                }}>
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div
                className={styles.pikachu}
                style={{
                    transform: calculateMouseTranslate(0.01),
                }}>
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};

export default Parallax;
