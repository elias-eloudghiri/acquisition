import { Button, Checkbox, FormGroup, Heading, Stack, TextInput } from "@carbon/react";
import Select from "@carbon/react/lib/components/Select/Select";
import SelectItem from "@carbon/react/lib/components/SelectItem/SelectItem";
import TextArea from "@carbon/react/lib/components/TextArea/TextArea";
import React, { useState } from "react";
import { creerProjetAction } from "@/acquisition/components/formulaire-creation-projet/creer-projet-action";

export function FormulaireCreationProjet(props: { onSuccessSubmit: () => Promise<void> }) {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        categorie: '',
        toutRisque: false,
        caution: false,
        commerciale: false,
        nantissement: false,
        hypothèque: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const elementById = document.getElementById("name") as HTMLInputElement;
        if (!elementById.checkValidity()) {
            e.preventDefault();
            elementById.setAttribute("aria-invalid", "true");
            elementById.classList.add("is-invalid");
            elementById.setCustomValidity("Champs requis");
            return;
        }
        await creerProjetAction(formData);
        await props.onSuccessSubmit();
    };

    return <>
        <Heading>Créer un projet</Heading>
        <form onSubmit={handleSubmit}>
            <Stack gap={6}>
                <TextInput
                    type="text"
                    id="name"
                    name="name"
                    labelText="Le nom du projet"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextArea
                    id="message"
                    name="message"
                    labelText="Votre ambition"
                    value={formData.message}
                    onChange={handleChange}
                />
                <Select
                    id="categorie"
                    name="categorie"
                    labelText="Catégories"
                    value={formData.categorie}
                    onChange={handleChange}
                >
                    <SelectItem text="Nouveaux véhicules" value="nouveau-vehicule"/>
                    <SelectItem text="Retard de vol" value="retard-de-vol"/>
                    <SelectItem text="Habitation" value="habitation"/>
                    <SelectItem text="Assurance Vie" value="assurance-vie"/>
                </Select>

                <FormGroup role="group" legendText="Quelles garanties souhaitez-vous ?">
                    <Checkbox
                        name="toutRisque"
                        id="tout-risque"
                        labelText="Tout risque"
                        checked={formData.toutRisque}
                        onChange={handleChange}
                    />
                    <Checkbox
                        name="caution"
                        id="caution"
                        labelText="Caution"
                        checked={formData.caution}
                        onChange={handleChange}
                    />
                    <Checkbox
                        name="commerciale"
                        id="commerciale"
                        labelText="Commerciale"
                        checked={formData.commerciale}
                        onChange={handleChange}
                    />
                    <Checkbox
                        name="nantissement"
                        id="nantissement"
                        labelText="Nantissement"
                        checked={formData.nantissement}
                        onChange={handleChange}
                    />
                    <Checkbox
                        name="hypothèque"
                        id="hypothèque"
                        labelText="Hypothèque"
                        checked={formData.hypothèque}
                        onChange={handleChange}
                    />
                </FormGroup>

                <Button type="submit">Créer mon projet</Button>
            </Stack>
        </form>
    </>;
}
