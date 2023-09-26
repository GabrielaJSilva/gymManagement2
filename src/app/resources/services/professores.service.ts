import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  getProfessoresData() {
    return [
        {
            nome: 'Frederico da Silva',
            Telefone: 'aaaaa',              
        },]}
  constructor() { }
}
