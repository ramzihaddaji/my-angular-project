import { Categorie } from "./categorie";
import { User } from "./user";
import { UserCOA } from "./userCOA";


export interface Evenement {
    id?: number ;
    nom?: string ;
    description?: string ;
    date_debut? : Date ;
    date_fin? : Date ;
    lieu? : string;
    frais? : string ;
    status? : string;
    categorieId? : number ;
    categorie?: Categorie;
    createdAt? : Date ;
    updatedAt? : Date ;
    nombreDePlace? : number ;
    image?: string;
    utilisateurId? : number;
    utilisateurCOAId? : number ;
    userCOA?: UserCOA;
    responseUser?: User;
    typeEvenement?: string ;
    type?: string ;
    prixTotal? : number;

}