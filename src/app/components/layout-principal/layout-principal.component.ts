import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../models/categoria.model';
import { Credencial } from '../../models/credencial.model';
import { Usuario } from '../../models/usuario.model';
import { LayoutTabelaDadosComponent } from "../layout-tabela-dados/layout-tabela-dados.component";
import { SelectCategoryComponent } from "../select-category/select-category.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [FormsModule, CommonModule, DragDropModule, LayoutTabelaDadosComponent, SelectCategoryComponent],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.css'
})
export class LayoutMainComponent {

  constructor() { }


  usuario: Usuario = {
    nome: "Lucas",
    email: "lucas@example.com",
    credenciais: [
      {
        nome: "Google",
        usuario: "lucasrodrigo507@gmail.com",
        senha: "123123",
        url: "www.google.com",
        notas: "testando 123 notas",
        category: { title: 'Redes', color: '#ff0000' },
        dataCriacao: "25/10/2024"
      },
      {
        nome: "GitHub",
        usuario: "lucas_git",
        senha: "senha_github",
        url: "www.github.com",
        notas: "conta pessoal",
        category: { title: 'Dev', color: '#0000ff' },
        dataCriacao: "24/10/2024"
      },
      {
        nome: "GitHub",
        usuario: "lucas_git",
        senha: "senha_github",
        url: "www.github.com",
        notas: "conta pessoal",
        category: { title: 'Dev', color: '#0000ff' },
        dataCriacao: "24/10/2024"
      },
      {
        nome: "GitHub",
        usuario: "lucas_git",
        senha: "senha_github",
        url: "www.github.com",
        notas: "conta pessoal",
        category: { title: 'Dev', color: '#0000ff' },
        dataCriacao: "24/10/2024"
      },
      {
        nome: "GitHub",
        usuario: "lucas_git",
        senha: "senha_github",
        url: "www.github.com",
        notas: "conta pessoal",
        category: { title: 'Dev', color: '#0000ff' },
        dataCriacao: "24/10/2024"
      },
      {
        nome: "GitHub",
        usuario: "lucas_git",
        senha: "senha_github",
        url: "www.github.com",
        notas: "conta pessoal",
        category: { title: 'Dev', color: '#0000ff' },
        dataCriacao: "24/10/2024"
      }
    ]
  };

  categories: Categoria[] = [];

  @ViewChild('categoriesList') categoriesList!: ElementRef;


  colorSelectorActive: boolean = false;

  closeSelectCategory(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Escape') {
      this.colorSelectorActive = false;
    }
    this.scrollToLastCategory();
  }

  AddCategory() {
    this.colorSelectorActive = true;
  }

  categoryReceived(categoria: Categoria) {
    console.log(categoria)
    this.categories.push(categoria)
  }

  scrollToLastCategory() {
    if (this.categoriesList && this.categoriesList.nativeElement) {
      const lastCategoryElement = this.categoriesList.nativeElement.lastElementChild;

      if (lastCategoryElement) {
        const element = this.categoriesList.nativeElement;
        lastCategoryElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
          element.scrollTop = element.scrollHeight;
        }, 300);
      }
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }


  currentCredencial: Credencial | null = null;

  tableActive: boolean = false;

  itemSelected(item: Credencial) {
    this.currentCredencial = item
    this.tableActive = true

  }

  deselectCredencial() {
    this.currentCredencial = null;
    this.tableActive = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  closeOnEsc(event: KeyboardEvent) {
    this.deselectCredencial();
  }

  @HostListener('document:click', ['$event.target'])
  closeOnClickOutside(targetElement: HTMLElement) {
    if (targetElement.classList.contains('side-options') || targetElement.classList.contains('side-list')) {
      this.deselectCredencial();
    }
  }

}
