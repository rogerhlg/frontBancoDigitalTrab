import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './components/views/conta/atualizar/atualizar.component';
import { CadastrarContaComponent } from './components/views/conta/cadastrar-conta/cadastrar-conta.component';
import { DeletarComponent } from './components/views/conta/deletar/deletar.component';
import { ListarContaComponent } from './components/views/conta/listar-conta/listar-conta.component';
import { DepositoComponent } from './components/views/deposito/deposito.component';
import { SaqueComponent } from './components/views/saque/saque.component';
import { TransferenciaComponent } from './components/views/transferencia/transferencia.component';

const routes: Routes = [
  {
    path: '',
    component: ListarContaComponent
  },
  {
    path: 'cadastrar/conta',
    component: CadastrarContaComponent
  },
  {
    path: 'remover/conta',
    component: DeletarComponent
  },
  {
    path: 'atualizar/conta',
    component: AtualizarComponent
  },
  {
    path: 'saque/conta',
    component: SaqueComponent
  },
  {
    path: 'deposito/conta',
    component: DepositoComponent
  },
  {
    path: 'transferencia/conta',
    component: TransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
