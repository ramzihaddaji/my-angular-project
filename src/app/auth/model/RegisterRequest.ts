export interface RegisterRequest {
    nom?: string;
    prenom?: string;
    ncin?: number;
    date_naiss? : Date ;
    email?: string;
    password?: string;
    role? : string ;
    confirmed?:string;
  }
  