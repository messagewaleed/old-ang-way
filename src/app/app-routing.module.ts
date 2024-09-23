import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RestcallComponent } from './restcall/restcall.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'settings',
     component: SettingsComponent,
     children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'rest', component: RestcallComponent}
     ]
    
    },
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
