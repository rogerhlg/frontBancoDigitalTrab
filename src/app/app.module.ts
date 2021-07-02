import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ListarContaComponent } from './components/views/conta/listar-conta/listar-conta.component';
import { CadastrarContaComponent } from './components/views/conta/cadastrar-conta/cadastrar-conta.component';
import { ContentComponent } from './components/template/content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { DeletarComponent } from './components/views/conta/deletar/deletar.component';
import { AtualizarComponent } from './components/views/conta/atualizar/atualizar.component';
import { SaqueComponent } from './components/views/saque/saque.component';
import { DepositoComponent } from './components/views/deposito/deposito.component';
import { TransferenciaComponent } from './components/views/transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarContaComponent,
    CadastrarContaComponent,
    ContentComponent,
    DeletarComponent,
    AtualizarComponent,
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
