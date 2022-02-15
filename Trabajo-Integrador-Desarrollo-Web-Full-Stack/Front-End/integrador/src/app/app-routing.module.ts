import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { InboxComponent } from './pages/messages/inbox/inbox.component';
import { NewMessageComponent } from './pages/messages/new-message/new-message.component';
import { SentComponent } from './pages/messages/sent/sent.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard],
  },

  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UnauthenticatedGuard],
  },

  {
    path: 'new-message',
    component: NewMessageComponent,
    canActivate: [AuthenticatedGuard],
  },

  {
    path: 'inbox',
    component: InboxComponent,
    canActivate: [AuthenticatedGuard],
  },

  { path: 'sent', component: SentComponent, canActivate: [AuthenticatedGuard] },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
