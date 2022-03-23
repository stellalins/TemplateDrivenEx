import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private dialog: MatDialog) {}

name: string = ''
lastname: string = ''
cpf: string = ''
telefone: string = ''
endereco: string = ''
complemento: string = ''
username: string = ''
senha: string = ''
confsenha: string = ''


submit() : void {
console.log(`Name = ${this.name}`)
  console.log(`LastName = ${this.lastname}`)
  console.log(`Cpf = ${this.cpf}`)
  console.log(`Telefone = ${this.telefone}`)
  console.log(`Endereco = ${this.endereco}`)
  console.log(`Complemento = ${this.complemento}`)
  console.log(`Username = ${this.username}`)
  console.log(`Senha = ${this.senha}`)
  console.log(`Confsenha = ${this.confsenha}`)
if (this.senha !== this.confsenha) {
  alert("As senhas não conferem! Digite as senhas iguais!")
  return;
 }
  let ref = this.dialog.open(DialogComponent)

  ref.componentInstance.named = this.name
  ref.componentInstance.lastnamed = this.lastname
  ref.componentInstance.cpfd = this.cpf
  ref.componentInstance.telefoned = this.telefone
  ref.componentInstance.enderecod = this.endereco
  ref.componentInstance.complementod = this.complemento
  ref.componentInstance.usernamed = this.username
 }
}