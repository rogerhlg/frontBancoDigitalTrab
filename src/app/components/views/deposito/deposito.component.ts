import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Deposito } from 'src/app/models/Deposito';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  valor!: number;
  pix!: string;

  constructor(private service: ContaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  efetuar(): void {

    let deposito = new Deposito();
    deposito.valor = this.valor;
    deposito.pix = this.pix;

    
    this.service.deposito(deposito, this.pix).subscribe(conta => {
      console.log(conta);
      this.snack.open("Deposito efetuado!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
