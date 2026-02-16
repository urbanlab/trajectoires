export type FormData = {
  id: number;
  fields: {
    ref_email: string;
    ref_company: number;
    Nom: string;
    Prenom: string;
    Poste: string;
    Vous_etes_: string;
    Quel_est_votre_age_: number;
    Notez_votre_lieu_d_habitation: string;
    Vos_horaires_de_travail: string;
    Combien_de_temps_mettez_vous_en_general_pour_vous_rendre_sur_votre_lieu_de_travail_en_minutes_: number;
    Utilisez_vous_un_ou_plusieurs_modes_de_transport_pour_vos_trajets_domicile_travail_la_marche_sera_prise_en_compte_lorsque_la_distance_parcourue_est_superieure_a_300m_: string;
    Dans_la_liste_ci_dessous_pouvez_vous_indiquer_votre_moyen_de_transport_principal_pour_vos_trajets_domicile_travail_Le_mode_principal_est_celui_qui_vous_permet_de_parcourir_la_partie_principale_de_votre_trajet_: string;
    Profitez_vous_de_votre_trajet_domicile_travail_pour_effectuer_d_autres_deplacements_: string;
    Si_vous_vous_deplacez_en_vehicule_motorise_quelle_est_la_motorisation_de_ce_vehicule_: string;
    Quel_est_le_Crit_Air_de_votre_vehicule_: string;
    Etes_vous_satisfait_de_vos_habitudes_de_deplacements_domicile_travail_: string;
    Quels_sont_les_freins_qui_vous_empechent_de_venir_davantage_a_velo_: string | null;
    Completed: boolean;
    Si_oui_pour_quels_deplacements_: string;
  };
};
