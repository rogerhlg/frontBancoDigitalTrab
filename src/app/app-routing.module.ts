import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarContaComponent } from './components/views/conta/cadastrar-conta/cadastrar-conta.component';
import { ListarContaComponent } from './components/views/conta/listar-conta/listar-conta.component';

const routes: Routes = [
  {
    path: '',
    component: ListarContaComponent
  },
  {
    path: 'cadastrar/conta',
    component: CadastrarContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
