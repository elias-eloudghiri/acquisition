import { Projet } from './Projet';

export interface ProjetRepository {
    enregistrer: (projet: Projet) => Promise<void>
    recupererTout: () => Promise<Projet[]>
}
