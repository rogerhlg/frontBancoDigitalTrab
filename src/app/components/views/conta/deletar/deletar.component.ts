import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  cpf! : string;

  constructor(private service: ContaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  deletar(){
    return this.service.remover(this.cpf).subscribe(cpf =>{
      this.snack.open("Conta apagada com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
