import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './private/components/user/user.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { EvenementComponent } from './private/components/evenement/evenement.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomedashComponent } from './dashbord/homedash/homedash.component';
import { NavbarindexComponent } from './public/components/home/navbarindex/navbarindex.component';
import { UserDetailsComponent } from './private/components/user/user-details/user-details.component';
import { DetailsEvenementComponent } from './private/components/evenement/details-evenement/details-evenement.component';
import { HomeComponent } from './public/components/home/home.component';
import { EventannComponent } from './public/components/eventann/eventann.component';
import { CategoriesComponent } from './private/components/categories/categories.component';
import { AuthGuard } from './auth.guard';
import { DynamiqueformComponent } from './dynamiqueform/dynamiqueform.component';
import { DashboardCollaborateurComponent } from './dashboard-collaborateur/dashboard-collaborateur.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { HomedashClientComponent } from './dashboard-client/homedash-client/homedash-client.component';
import { HomedashCollaborateurComponent } from './dashboard-collaborateur/homedash-collaborateur/homedash-collaborateur.component';
import { HomedashOrganisateurComponent } from './dashboard-organisateur/homedash-organisateur/homedash-organisateur.component';
import { DashboardOrganisateurComponent } from './dashboard-organisateur/dashboard-organisateur.component';
import { RegisterCOAComponent } from './auth/components/register-coa/register-coa.component';
import { LoginCOAComponent } from './auth/components/login-coa/login-coa.component';
import { DetailsCategoriesComponent } from './private/components/categories/details-categories/details-categories.component';
import { ChoicesComponent } from './private/components/choices/choices.component';
import { DetailsChoicesComponent } from './private/components/choices/details-choices/details-choices.component';
import { QuestionsComponent } from './private/components/questions/questions.component';
import { DetailsQuestionComponent } from './private/components/questions/details-question/details-question.component';
import { EventannDetailsComponent } from './public/components/eventann/eventann-details/eventann-details.component';
import { RestPasswordComponent } from './auth/components/login/rest-password/rest-password.component';
import { ResetPasswordComponent } from './auth/components/login/reset-password/reset-password.component';
import { IndexPComponent } from './public/components/home/index-p/index-p.component';
import { HomePComponent } from './public/components/home/home-p/home-p.component';
import { HomeGComponent } from './public/components/home/home-g/home-g.component';
import { ContactComponent } from './public/components/contact/contact.component';
import { ModifieProfileClientComponent } from './dashboard-client/modifie-profile-client/modifie-profile-client.component';
import { ClientComponent } from './dashbord/client/client.component';
import { CollaborateurComponent } from './dashbord/collaborateur/collaborateur.component';
import { OrganisateurComponent } from './dashbord/organisateur/organisateur.component';
import { ParticipantComponent } from './dashbord/participant/participant.component';
import { AffecterOrganisateurComponent } from './dashbord/affecter-organisateur/affecter-organisateur.component';
import { AnnEventComponent } from './dashbord/ann-event/ann-event.component';
import { EvenementAnnonceDetailsComponent } from './dashbord/ann-event/evenement-annonce-details/evenement-annonce-details.component';
import { CollaborateurDetailsComponent } from './dashbord/collaborateur/collaborateur-details/collaborateur-details.component';
import { OrganisateurDetailsComponent } from './dashbord/organisateur/organisateur-details/organisateur-details.component';
import { GetCOAComponent } from './dashbord/get-coa/get-coa.component';
import { GetDetaisCOAComponent } from './dashbord/get-coa/get-detais-coa/get-detais-coa.component';
import { InterfaceOrganisationComponent } from './dynamiqueform/interface-organisation/interface-organisation.component';
import { OrganiseEventComponent } from './public/components/organise-event/organise-event.component';
import { EditProfilComponent } from './dashboard-collaborateur/edit-profil/edit-profil.component';
import { UserAuthGuard } from './user-auth.guard';
import { ListeEvenementByIDUSerComponent } from './dashboard-client/liste-evenement-by-iduser/liste-evenement-by-iduser.component';
import { InscriptionEventComponent } from './public/components/inscription-event/inscription-event.component';
import { EvenementAffecterComponent } from './dashboard-organisateur/evenement-affecter/evenement-affecter.component';
import { RessourceEvenetOrgComponent } from './dashboard-organisateur/ressource-evenet-org/ressource-evenet-org.component';
import { RessourceDemanderCollComponent } from './dashboard-collaborateur/ressource-demander-coll/ressource-demander-coll.component';
import { InterfaceAnnonceComponent } from './dynamiqueform/interface-annonce/interface-annonce.component';
import { RessourceComponent } from './dashboard-collaborateur/ressource/ressource.component';
import { RessourceDetailsComponent } from './dashboard-collaborateur/ressource/ressource-details/ressource-details.component';
import { SousCategorieComponent } from './dashboard-organisateur/sous-categorie/sous-categorie.component';
import { SousCategorieDetailsComponent } from './dashboard-organisateur/sous-categorie/sous-categorie-details/sous-categorie-details.component';
import { FiltreInscriComponent } from './dashboard-organisateur/filtre-inscri/filtre-inscri.component';
import { InscriEventComponent } from './dashboard-client/inscri-event/inscri-event.component';
import { EvenementOrganisateurComponent } from './dashboard-organisateur/evenement-organisateur/evenement-organisateur.component';
import { EditProfilOrganisateurComponent } from './dashboard-organisateur/edit-profil-organisateur/edit-profil-organisateur.component';
import { EditProfilUserComponent } from './public/components/edit-profil-user/edit-profil-user.component';

const routes: Routes = [



  {
    path: 'dashboardcollaborateur/:id',
    component: DashboardCollaborateurComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomedashCollaborateurComponent },
      { path: 'resourceDemmanderColl/:id', component: RessourceDemanderCollComponent },
      { path: 'modifieProColl/:id', component: EditProfilComponent },
      { path: 'myresource/:id', component: RessourceComponent},
      { path: 'myresource/:id/ressourceAdd/:id', component: RessourceDetailsComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  {
    path: 'dashboardclient/:id',
    component: DashboardClientComponent,canActivate: [UserAuthGuard],
    children: [
      { path: 'home', component: HomedashClientComponent },
      { path: 'myEvenement/:id', component: ListeEvenementByIDUSerComponent },
      {path: 'modifiePro/:id',component: ModifieProfileClientComponent},
      {path: 'Myinscri/:id',component: InscriEventComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },


  
  //authUsers
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //authAdmin
  { path: 'registercoa', component: RegisterCOAComponent },
  { path: 'logincoa', component: LoginCOAComponent },
  { path: 'navv', component: NavbarindexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'homeP', component: HomePComponent },
  { path: 'homeG', component: HomeGComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'organiserEvent/:id', component: InterfaceOrganisationComponent,},
  // canActivate: [UserAuthGuard] 




  { path: 'organiserEventOne', component: OrganiseEventComponent ,canActivate: [UserAuthGuard] },
  { path: 'createForm/:id', component: DynamiqueformComponent,canActivate: [UserAuthGuard], },
  { path: 'organiserEventF', component: InterfaceOrganisationComponent,canActivate: [UserAuthGuard], },
  { path: 'AnnonceEvenetF/:id', component: InterfaceAnnonceComponent,canActivate: [UserAuthGuard], },

  { path: 'annonceEvent', component: EventannComponent ,canActivate: [UserAuthGuard], },
  { path: 'categorie', component: CategoriesComponent },
  { path: 'question', component: QuestionsComponent },
  { path: 'choice', component: ChoicesComponent },
  { path: 'forgotPassword', component: RestPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'client', component: ClientComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'organisateur', component: OrganisateurComponent },
  { path: 'participant', component: ParticipantComponent },
  { path: 'affecterOrganisateur/:idE', component: AffecterOrganisateurComponent },
  { path: 'evenement-details/:id', component: EventannDetailsComponent },
  { path: 'registerCollaborateur', component: CollaborateurDetailsComponent },
  { path: 'registerOrganisateur', component: OrganisateurDetailsComponent },
  { path: 'question/:id', component: DetailsQuestionComponent },
  { path: 'inscription/:id', component: InscriptionEventComponent ,canActivate: [UserAuthGuard], },
  { path: 'annonceEvent', component: EventannComponent ,canActivate: [UserAuthGuard] },

  //dashboardAdmin
  //,canActivate: [AuthGuard]
  {
    path: 'dashboardadmin/:id',
    component: DashbordComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomedashComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/add', component: UserDetailsComponent },
      { path: 'userCOA', component: GetCOAComponent },
      { path: 'client', component: ClientComponent },

      { path: 'collaborateur', component: CollaborateurComponent },
      { path: 'organisateur', component: OrganisateurComponent },
      { path: 'participant', component: ParticipantComponent },
      { path: 'dashboard/user/:id', component: UserDetailsComponent },
      { path: 'categorie', component: CategoriesComponent },
      { path: 'question', component: QuestionsComponent },
      { path: 'dashboard/question/:id', component: DetailsQuestionComponent },
      { path: 'choice', component: ChoicesComponent },
      { path: 'dashboard/choice/:id', component: DetailsChoicesComponent },
      {path: 'dashboard/categorie/:id',component: DetailsCategoriesComponent},
      { path: 'evenement', component: EvenementComponent },
      { path: 'annevent', component: AnnEventComponent  },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  //dashboardCollaborateur

  //dashboardClient


  //dashboardOrganisateur
  {
    path: 'dashboardorganisateur/:id',
    component: DashboardOrganisateurComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomedashOrganisateurComponent },
      {path: 'modifieProOrg/:id',component: EditProfilOrganisateurComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user', component: UserComponent },
      { path: 'dashboard/user/:id', component: UserDetailsComponent },
      { path: 'categorie', component: CategoriesComponent },
      { path: 'sousCategorie', component: SousCategorieComponent },
      // { path: 'sousCategorie/:id', component: SousCategorieDetailsComponent },
      { path: 'evenement', component: EvenementOrganisateurComponent },
      { path: 'evenementAff/:id', component: EvenementAffecterComponent },

      // { path: 'SousCategorie', component: SousCategorieComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },


  // { path: 'editProfil/:id', component: EditProfilComponent },


  { path: 'resourceEventOrg/:id', component: RessourceEvenetOrgComponent },
  // { path: 'responseQuestion/:id', component: RessourceEvenetOrgComponent },
  { path: 'filtreInscri/:id', component: FiltreInscriComponent },

  {path: 'sousCategorie' , component : SousCategorieComponent },
  { path: 'sousCategorie/:id', component: SousCategorieDetailsComponent },


  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'userCOA/:id',
    component: GetDetaisCOAComponent,
  },
  

  { path: 'user', component: UserComponent },
  {
    path: 'evenement/:id',
    component: DetailsEvenementComponent,
  },
  { path: 'evenement', component: EvenementComponent },
  { path: 'createForm', component: DynamiqueformComponent },
  {
    path: 'categorie/:id',
    component: DetailsCategoriesComponent,
  },
  {
    path: 'myresource/:id/ressource/:id',
    component: RessourceDetailsComponent,
  },
  {
    path: 'evenement/:id',
    component: DetailsEvenementComponent,
  },
  {
    path: 'annevent/:id',
    component: EvenementAnnonceDetailsComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  
  {path: 'modifieProUser',component: EditProfilUserComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
