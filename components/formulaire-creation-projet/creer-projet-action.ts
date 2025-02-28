import { Garantie } from "@/acquisition/components/formulaire-creation-projet/Projet";
import { CreationProjetCommande, CreerUnProjet } from "@/acquisition/components/formulaire-creation-projet/creer-un-projet";
import { LocalStorageProjetRepository } from "@/acquisition/components/formulaire-creation-projet/local-storage-projet-repository";

function transformerEnCreationProjetCommande(formData: any): CreationProjetCommande {
    const nom = formData.name || '';
    const ambition = formData.message || '';
    const categorie = formData.categorie || '';

    const garanties: Garantie[] = [
        Garantie.caution,
        Garantie.commerciale,
        Garantie["tout-risque"],
        Garantie.hypothèque,
        Garantie.nantissement
    ].filter(key => formData[key.toString()] !== undefined);

    return {
        nom,
        ambition,
        categorie,
        garanties,
    };
}

export const creerProjetAction = async (formData: any) => {
    const projetCommande: CreationProjetCommande = transformerEnCreationProjetCommande(formData);
    await new CreerUnProjet(new LocalStorageProjetRepository()).executer(projetCommande);
};
