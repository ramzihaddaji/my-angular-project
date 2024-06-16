export interface LoginResponse {
    token?: string;
    id?: number;
    nom?: string;
    prenom?: string;
    ncin?: string;
    date_naiss?: Date;
    email?: string;
    password?: string;
    role?: string;
    confirmed?:string;
  }
  
  // user.model.ts


