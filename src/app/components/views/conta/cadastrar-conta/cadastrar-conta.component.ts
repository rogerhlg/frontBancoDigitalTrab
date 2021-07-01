import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Conta } from 'src/app/models/Conta';
import { Pix } from 'src/app/models/Pix';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})
export class CadastrarContaComponent implements OnInit {

  data!: string;
  tipo!: string;
  chave!: string;

  cpf!: string;
  pix!: Pix;
  sobrenome!: string;
  nome!: string;
  saldo!: number;
  telefone!: string;

  constructor(private service: ContaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrar(): void {

    let pix = new Pix();
    pix.tipo = this.tipo;
    pix.chave = this.chave;

    let conta = new Conta();
    conta.primeiroNome = this.nome;
    conta.CPF = this.cpf;
    conta.sobrenome = this.sobrenome;
    conta.pix = pix;
    conta.telefone = this.telefone;
    console.log(conta);
    this.service.cadastrar(conta).subscribe(conta => {
      console.log(conta);
      this.snack.open("Conta digital cadastrada", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
