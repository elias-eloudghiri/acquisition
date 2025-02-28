import { Projet } from "@/acquisition/components/formulaire-creation-projet/Projet";
import { ProjetRepository } from "@/acquisition/components/formulaire-creation-projet/projet-repository";

export class LocalStorageProjetRepository implements ProjetRepository {
    private readonly storageKey = 'projets';

    async enregistrer(projet: Projet): Promise<void> {
        localStorage.setItem(this.storageKey, JSON.stringify(projet));
    }

    async recupererTout(): Promise<Projet[]> {
        const presentStorage = localStorage.getItem(this.storageKey);
        if (presentStorage) {
            return [JSON.parse(presentStorage)];
        } else {
            return [];
        }
    }
}
