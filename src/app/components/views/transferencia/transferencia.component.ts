import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/Transferencia';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  valor!: number;
  pix!: string;
  destino!: string;

  constructor(private service: ContaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  efetuar(): void {

    let transferencia = new Transferencia();
    transferencia.valor = this.valor;
    transferencia.pixDestino = this.destino;
    transferencia.chavepix = this.pix;

    this.service.transferencia(transferencia, this.pix).subscribe(() => {
      // console.log(conta);
      this.snack.open("Transferencia efetuada!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
