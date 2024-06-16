import { Evenement } from "./evenement";
import { User } from "./user";

export interface Inscription {
    id?: number ; 
    date_inscription?: string;
    status?: string;
    payement?: boolean ;
    createdAt?: Date;
    updatedAt?: Date;
    evenement?: Evenement ;
    utilisateurId?: number ;
    user?: User ;
  }
  