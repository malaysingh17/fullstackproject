import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonoraddComponent } from './donoradd/donoradd.component';
import { HomeComponent } from './home/home.component';
import { ViewdonorComponent } from './viewdonor/viewdonor.component';
import{AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [

  { path: 'donoradd', component:DonoraddComponent },
  { path: 'home' , component:HomeComponent },
  { path: 'viewdonor', component:ViewdonorComponent },
    { path:'about',component:AboutComponent  },
    {path:'contact',component:ContactComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
