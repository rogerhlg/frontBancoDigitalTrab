import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Saque } from 'src/app/models/Saque';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  constructor(private service: ContaService, private router: Router, private snack: MatSnackBar) { }
  valor!: number;
  chavepix!: string;
  ngOnInit(): void {
  }
  efetuar(): void {

    let saque = new Saque();
    saque.valor = this.valor;
    saque.chavepix = this.chavepix;

    
    this.service.saque(saque, this.chavepix).subscribe(conta => {
      console.log(conta);
      this.snack.open("Saque efetuado!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
