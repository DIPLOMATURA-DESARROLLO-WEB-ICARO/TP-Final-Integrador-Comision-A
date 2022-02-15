import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorandosComponent } from './pages/memorandos/memorandos.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'memorandos', component: MemorandosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
