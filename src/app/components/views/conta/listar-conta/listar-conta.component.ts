import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/Conta';
import { ContaService } from 'src/app/services/conta.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-listar-conta',
  templateUrl: './listar-conta.component.html',
  styleUrls: ['./listar-conta.component.css']
})
export class ListarContaComponent implements OnInit {
  contas!: MatTableDataSource<Conta>;
  displayedColumns: string[] = ['primeiroNome', 'CPF', 'saldo', 'pix', 'criadoEm'];
  constructor(private service: ContaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((contas) => {
      console.log(contas);
      this.contas = new MatTableDataSource<Conta>(contas);
    })
  }

}
