import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadaComponent } from './componentes/jugada/jugada.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'jugada', component: JugadaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
