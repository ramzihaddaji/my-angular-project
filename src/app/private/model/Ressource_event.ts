import { Ressources } from "./Ressources";
import { SousCategories } from "./SousCategories";
import { Evenement } from "./evenement";
import { UserCOA } from "./userCOA";

export interface Ressource_event {
    id?: number ;
    nom_ressource?: string ;
    quantite_ressource? : number ;
    ressourceId? : number;
    status?: boolean ;
    ressource?: Ressources ;
    evenementId? : number ;
    evenement? : Evenement ;
    createdAt? : Date ;
    updatedAt? : Date ;
    Souscategories?: number; // Assuming it's a number
    Souscategorie? : SousCategories ;
    collaborateurId? : number ;
    collaborateur?: UserCOA ;
    categorie?: any;
}