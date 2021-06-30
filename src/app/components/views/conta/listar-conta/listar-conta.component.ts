import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-listar-conta',
  templateUrl: './listar-conta.component.html',
  styleUrls: ['./listar-conta.component.css']
})
export class ListarContaComponent implements OnInit {

  constructor(private service: ContaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((contas) => {
      console.log(contas)
    })
  }

}
