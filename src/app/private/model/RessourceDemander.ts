import { Ressources } from "./Ressources";
import { SousCategories } from "./SousCategories";
import { Evenement } from "./evenement";

export interface RessourceDemander {
    id?: number ;
    nom_ressource?: string ;
    quantite_ressource? : number ;
    ressourceId? : number;
    ressource?: Ressources ;
    evenementId? : number ;
    evenement? : Evenement ;
    createdAt? : Date ;
    updatedAt? : Date ;
    Souscategories?: number; // Assuming it's a number
    Souscategorie? : SousCategories ;
  categorie?: any;
}