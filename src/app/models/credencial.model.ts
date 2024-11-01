import { Categoria } from "./categoria.model";

export interface Credencial {
  nome: string;
  usuario: string;
  senha: string;
  url: string;
  notas: string;
  category: Categoria;
  dataCriacao: string;
}