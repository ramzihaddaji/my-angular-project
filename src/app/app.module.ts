import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './private/components/user/user.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvenementComponent } from './private/components/evenement/evenement.component';
import { SidebarComponent } from './dashbord/sidebar/sidebar.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomedashComponent } from './dashbord/homedash/homedash.component';
import { NavbarindexComponent } from './public/components/home/navbarindex/navbarindex.component';
import { UserDetailsComponent } from './private/components/user/user-details/user-details.component';
import { DetailsEvenementComponent } from './private/components/evenement/details-evenement/details-evenement.component';
import { HomeComponent } from './public/components/home/home.component';
import { IndexComponent } from './public/components/home/index/index.component';
import { FooterComponent } from './public/components/home/footer/footer.component';
import { FormComponent } from './core/components/form/form.component';
import { EventannComponent } from './public/components/eventann/eventann.component';
import { CategoriesComponent } from './private/components/categories/categories.component';
import { DetailsCategoriesComponent } from './private/components/categories/details-categories/details-categories.component';
import { DynamiqueformComponent } from './dynamiqueform/dynamiqueform.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardCollaborateurComponent } from './dashboard-collaborateur/dashboard-collaborateur.component';
import { NavbarClientComponent } from './dashboard-client/navbar-client/navbar-client.component';
import { HomedashClientComponent } from './dashboard-client/homedash-client/homedash-client.component';
import { SidebarClientComponent } from './dashboard-client/sidebar-client/sidebar-client.component';
import { HomedashCollaborateurComponent } from './dashboard-collaborateur/homedash-collaborateur/homedash-collaborateur.component';
import { NavbarCollaborateurComponent } from './dashboard-collaborateur/navbar-collaborateur/navbar-collaborateur.component';
import { SidebarCollaborateurComponent } from './dashboard-collaborateur/sidebar-collaborateur/sidebar-collaborateur.component';
import { DashboardOrganisateurComponent } from './dashboard-organisateur/dashboard-organisateur.component';
import { HomedashOrganisateurComponent } from './dashboard-organisateur/homedash-organisateur/homedash-organisateur.component';
import { NavbarOrganisateurComponent } from './dashboard-organisateur/navbar-organisateur/navbar-organisateur.component';
import { SidebarOrganisateurComponent } from './dashboard-organisateur/sidebar-organisateur/sidebar-organisateur.component';
import { LoginCOAComponent } from './auth/components/login-coa/login-coa.component';
import { RegisterCOAComponent } from './auth/components/register-coa/register-coa.component';
import { ChoicesComponent } from './private/components/choices/choices.component';
import { CommentairesComponent } from './private/components/commentaires/commentaires.component';
import { QuestionsComponent } from './private/components/questions/questions.component';
import { RessourceEventComponent } from './private/components/ressource-event/ressource-event.component';
import { RessourcesComponent } from './private/components/ressources/ressources.component';
import { DetailsChoicesComponent } from './private/components/choices/details-choices/details-choices.component';
import { DetailsQuestionComponent } from './private/components/questions/details-question/details-question.component';
import { DetailsCommentairsComponent } from './private/components/commentaires/details-commentairs/details-commentairs.component';
import { EventannDetailsComponent } from './public/components/eventann/eventann-details/eventann-details.component';
import { RestPasswordComponent } from './auth/components/login/rest-password/rest-password.component';
import { ResetPasswordComponent } from './auth/components/login/reset-password/reset-password.component';
import { IndexPComponent } from './public/components/home/index-p/index-p.component';
import { HomePComponent } from './public/components/home/home-p/home-p.component';
import { HomeGComponent } from './public/components/home/home-g/home-g.component';
import { ContactComponent } from './public/components/contact/contact.component';
import { ModifieProfileClientComponent } from './dashboard-client/modifie-profile-client/modifie-profile-client.component';
import { ParticipantComponent } from './dashbord/participant/participant.component';
import { ClientComponent } from './dashbord/client/client.component';
import { OrganisateurComponent } from './dashbord/organisateur/organisateur.component';
import { CollaborateurComponent } from './dashbord/collaborateur/collaborateur.component';
import { AffecterOrganisateurComponent } from './dashbord/affecter-organisateur/affecter-organisateur.component';
import { AnnEventComponent } from './dashbord/ann-event/ann-event.component';
import { EvenementAnnonceDetailsComponent } from './dashbord/ann-event/evenement-annonce-details/evenement-annonce-details.component';
import { CollaborateurDetailsComponent } from './dashbord/collaborateur/collaborateur-details/collaborateur-details.component';
import { OrganisateurDetailsComponent } from './dashbord/organisateur/organisateur-details/organisateur-details.component';
import { GetCOAComponent } from './dashbord/get-coa/get-coa.component';
import { GetDetaisCOAComponent } from './dashbord/get-coa/get-detais-coa/get-detais-coa.component';
import { InterfaceOrganisationComponent } from './dynamiqueform/interface-organisation/interface-organisation.component';
import { OrganiseEventComponent } from './public/components/organise-event/organise-event.component';
import { CommonModule } from '@angular/common';
import { EditProfilComponent } from './dashboard-collaborateur/edit-profil/edit-profil.component';
import { ListeEvenementByIDUSerComponent } from './dashboard-client/liste-evenement-by-iduser/liste-evenement-by-iduser.component';
import { InscriptionEventComponent } from './public/components/inscription-event/inscription-event.component';
import { EvenementAffecterComponent } from './dashboard-organisateur/evenement-affecter/evenement-affecter.component';
import { RessourceEvenetOrgComponent } from './dashboard-organisateur/ressource-evenet-org/ressource-evenet-org.component';
import { RessourceDemanderCollComponent } from './dashboard-collaborateur/ressource-demander-coll/ressource-demander-coll.component';
import { InterfaceAnnonceComponent } from './dynamiqueform/interface-annonce/interface-annonce.component';
import { RessourceComponent } from './dashboard-collaborateur/ressource/ressource.component';
import { RessourceDetailsComponent } from './dashboard-collaborateur/ressource/ressource-details/ressource-details.component';
import { RouterModule } from '@angular/router';
import { SousCategorieComponent } from './dashboard-organisateur/sous-categorie/sous-categorie.component';
import { SousCategorieDetailsComponent } from './dashboard-organisateur/sous-categorie/sous-categorie-details/sous-categorie-details.component';
import { FiltreInscriComponent } from './dashboard-organisateur/filtre-inscri/filtre-inscri.component';
import { InscriEventComponent } from './dashboard-client/inscri-event/inscri-event.component';
import { EvenementOrganisateurComponent } from './dashboard-organisateur/evenement-organisateur/evenement-organisateur.component';
import { EditProfilOrganisateurComponent } from './dashboard-organisateur/edit-profil-organisateur/edit-profil-organisateur.component';
import { EditProfilUserComponent } from './public/components/edit-profil-user/edit-profil-user.component';






@NgModule({
  declarations: [

    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    EvenementComponent,
    SidebarComponent,
    NavbarComponent,
    DashbordComponent,
    HomedashComponent,
    NavbarindexComponent,
    UserDetailsComponent,
    DetailsEvenementComponent,

    HomeComponent,
    IndexComponent,
    FooterComponent,

    FormComponent,

    EventannComponent,
    CategoriesComponent,
    DetailsCategoriesComponent,
    DynamiqueformComponent,
    DashboardClientComponent,
    DashboardCollaborateurComponent,
    NavbarClientComponent,
    HomedashClientComponent,
    SidebarClientComponent,
    HomedashCollaborateurComponent,
    NavbarCollaborateurComponent,
    SidebarCollaborateurComponent,
    DashboardOrganisateurComponent,
    HomedashOrganisateurComponent,
    NavbarOrganisateurComponent,
    SidebarOrganisateurComponent,
    LoginCOAComponent,
    RegisterCOAComponent,
    ChoicesComponent,
    CommentairesComponent,
    QuestionsComponent,
    RessourceEventComponent,
    RessourcesComponent,
    DetailsChoicesComponent,
    DetailsQuestionComponent,
    DetailsCommentairsComponent,
    EventannDetailsComponent,
    RestPasswordComponent,
    ResetPasswordComponent,
    IndexPComponent,
    HomePComponent,
    HomeGComponent,
    ContactComponent,
    ModifieProfileClientComponent,
    ParticipantComponent,
    ClientComponent,
    OrganisateurComponent,
    CollaborateurComponent,
    AffecterOrganisateurComponent,
    AnnEventComponent,
    EvenementAnnonceDetailsComponent,
    CollaborateurDetailsComponent,
    OrganisateurDetailsComponent,
    GetCOAComponent,
    GetDetaisCOAComponent,
    InterfaceOrganisationComponent,
    OrganiseEventComponent,
    EditProfilComponent,
    ListeEvenementByIDUSerComponent,
    InscriptionEventComponent,
    EvenementAffecterComponent,
    RessourceEvenetOrgComponent,
    RessourceDemanderCollComponent,
    InterfaceAnnonceComponent,
    RessourceComponent,
    RessourceDetailsComponent,
    SousCategorieComponent,
    SousCategorieDetailsComponent,
    FiltreInscriComponent,
    InscriEventComponent,
    EvenementOrganisateurComponent,
    EditProfilOrganisateurComponent,
    EditProfilUserComponent,


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
