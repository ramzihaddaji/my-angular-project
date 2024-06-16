// user.model.ts
export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  ncin?: string;
  date_naiss?: Date;
  email?: string;
  password?: string;
  confirmed?: string ;
  role?: string; 
  notification?: string;
}


