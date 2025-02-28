import { Heading, Section } from "@carbon/react";
import { Tile } from "carbon-components-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./SuiviProjet.module.css";
import { Projet } from "@/suivi/data/liste-projets";
import { LocalStorageProjetReadmodel } from "@/suivi/data/local-storage-projet-readmodel";

export function ListeProjets() {
    const [projets, setProjets] = useState<Projet[]>([]);

    useEffect(() => {
        async function recupereProjets() {
            const projets = await new LocalStorageProjetReadmodel().récupérerTout();
            setProjets(projets);
        }

        recupereProjets();
    }, []);

    return <>
        <Heading>
            Suivi de vos projets
        </Heading>
        <Section>
            <h2 className="text-xl font-semibold mb-2">La liste des projets</h2>
            <div className={styles.container}>
                {projets.map((projet: Projet) => (
                    <Link href={`/suivi-projet/${projet.id}`} className={styles.link} key={projet.id}>
                        <Tile className={styles.tile}>
                            {projet.nom}
                        </Tile>
                    </Link>
                ))}
            </div>
        </Section>
    </>;
}
