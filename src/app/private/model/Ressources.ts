import { SousCategories } from "./SousCategories";
import { UserCOA } from "./userCOA";

export interface Ressources {
    id?: number;
    ressource?: string;
    descRes?: string;
    prixRes?: number;
    quantite?: number;
    sousCategorieId?: number;
    sousCategorie?: SousCategories;
    selected?: boolean;
    quantiteDemandee?: number; // Ajoutez cette propriété
    collaborateurId? : number ;
    collaborateur?: UserCOA ;
    createdAt?: Date;
    updatedAt?: Date;
  }
  