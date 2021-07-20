import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiaComponent } from './pages/guia/guia.component';
import { IntroComponent } from './pages/intro/intro.component';

const routes: Routes = [

  {path:'', component:IntroComponent},
  {path:'intro', component:IntroComponent},
  {path:'guia',component:GuiaComponent},
  {path:'**', pathMatch:'full', redirectTo:'intro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
