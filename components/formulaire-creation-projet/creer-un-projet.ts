import { Garantie, Projet } from './Projet';
import { ProjetRepository } from './projet-repository';

export interface CreationProjetCommande {
    nom: string;
    ambition: string;
    categorie: string;
    garanties: Garantie[];
}

export class CreerUnProjet {
    private readonly projetRepository: ProjetRepository;

    constructor(projetRepository: ProjetRepository) {
        this.projetRepository = projetRepository;
    }

    async executer(projetCommande: CreationProjetCommande) {
        const projet = new Projet(projetCommande);
        await this.projetRepository.enregistrer(projet);
    }
}
