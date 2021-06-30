import { Pix } from "./Pix";

export class Conta {
    nome!: string;
    sobrenome!: string;
    cpf!: string;
    telefone?: string;
    saldo?: number;
    pix!: Pix;
}
