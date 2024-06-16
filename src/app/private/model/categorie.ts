
import { Evenement } from "./evenement";

export interface Categorie {
    id?: number ;
    nom?: string ;
    type?: string ;
    createdAt? : Date ;
    updatedAt? : Date ;
    evenement? : Evenement ;
}