import { Credencial } from './credencial.model';

export interface Usuario {
  nome: string;
  email: string;
  credenciais: Credencial[];
}