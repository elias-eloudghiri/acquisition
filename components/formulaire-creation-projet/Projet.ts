import { CreationProjetCommande } from './creer-un-projet';

export enum Garantie {
    'tout-risque',
    'caution',
    'commerciale',
    'nantissement',
    'hypothèque',
}

export class Projet {
    private readonly nom: string;
    private readonly ambition: string;
    private readonly categorie: string;
    private readonly garanties: Garantie[];

    constructor(projetCommande: CreationProjetCommande) {
        this.nom = projetCommande.nom;
        this.ambition = projetCommande.ambition;
        this.categorie = projetCommande.categorie;
        this.garanties = projetCommande.garanties;
    }
}
