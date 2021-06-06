import React from "react";

import cn from "classnames";
import styles from "./PokemonDetailsCard.module.scss";
import { Pokemon } from "../../data/models/Pokemon";
import TypeLabel from "../PokemonCard/TypeLabel";

type PokemonDetailsCardProps = {
    pokemon: Pokemon;
};

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({ pokemon }) => {
    return (
        <div className={styles.root}>
            <div className={styles.display}>
                <img src={pokemon.img} alt="Pokemon" />
                <div className={styles.labelsWrap}>
                    {pokemon.types.map(value => <TypeLabel key={value} type={value} />)}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.heading}>
                    <h3>{pokemon.cleanName}</h3>
                    <h5>Generation 1</h5>
                </div>
                <div className={styles.infoCard}>
                    <p>Abilities</p>
                    <p className={styles.abilities}>{pokemon.abilities.map((value, index) => `${index !== 0 ? " - " : ""}${value}`)}</p>
                </div>

                <div className={cn(styles.infoCard, styles.statsCard)}>
                    <div className={styles.statsMeterContainer}>
                        <p>Health Points</p>
                        <p><b>{pokemon.stats.hp}</b></p>
                        <div className={cn(styles.meter, styles.health)}>
                            <div className={styles.meterBody} />
                        </div>
                    </div>
                    <div className={styles.statsMeterContainer}>
                        <p>Experience</p>
                        <p><b>{pokemon.baseExperience}</b></p>
                        <div className={cn(styles.meter, styles.experience)}>
                            <div className={styles.meterBody} />
                        </div>
                    </div>
                </div>

                <div className={styles.fightStatsBlock}>
                    <div className={styles.infoCard}>
                        <p><b>{pokemon.stats.defense}</b></p>
                        <p>Defense</p>
                    </div>
                    <div className={styles.infoCard}>
                        <p><b>{pokemon.stats.attack}</b></p>
                        <p>Attack</p>
                    </div>
                    <div className={styles.infoCard}>
                        <p><b>{pokemon.stats.specialAttack}</b></p>
                        <p>Sp Attack</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonDetailsCard;
