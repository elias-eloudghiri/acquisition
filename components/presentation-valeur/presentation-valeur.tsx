import { Favorite, IbmWatsonAssistant, PenFountain, Product } from "@carbon/icons-react";
import { Button, Column, Grid, Heading, Stack, Tile } from "@carbon/react";
import Link from "next/link";
import React from "react";
import styles from './presentationValeur.module.css';

export function PresentationValeur() {
    return <>
        <div className={styles.header}>
            <div className={styles.headings}>
                <Heading>Les produits sur-mesure ça ne s&apos;invente pas</Heading>
                <Heading>Commencez avec nous aujourd&apos;hui.</Heading>
            </div>
            <Link href="/creation-projet">
                <Button>
                    Créer un produit sur-mesure
                </Button>
            </Link>
        </div>

        <Stack as="section" gap={8}>
            <Heading>À propos de notre entreprise</Heading>
            <Grid>
                <Column sm={4}>
                    <Tile>
                        <Product size={32}/>
                        <h3>Une grande gamme de produits</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </Tile>
                </Column>
                <Column sm={4}>
                    <Tile>
                        <Favorite size={32}/>
                        <h3>Une équipe de passionés</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </Tile>
                </Column>
                <Column sm={4}>
                    <Tile>
                        <IbmWatsonAssistant size={32}/>
                        <h3>Une relation de qualité</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </Tile>
                </Column>
                <Column sm={4}>
                    <Tile>
                        <PenFountain size={32}/>
                        <h3>Du sur-mesure en temps et en heure</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </Tile>
                </Column>
            </Grid>
        </Stack>
    </>;
}
