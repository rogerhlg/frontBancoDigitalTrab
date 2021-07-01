import { Pix } from "./Pix";

export class Conta {
    primeiroNome!: string;
    sobrenome!: string;
    CPF!: string;
    telefone?: string;
    saldo?: number;
    pix!: Pix;
    criadoEm?: Date;
}
