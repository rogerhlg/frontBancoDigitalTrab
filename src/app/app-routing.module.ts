import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContaComponent } from './components/views/conta/listar-conta/listar-conta.component';

const routes: Routes = [
  {
    path: '',
    component: ListarContaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
