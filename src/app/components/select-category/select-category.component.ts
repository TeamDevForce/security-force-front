import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {


  colors: string[] = ['#9C5ECD', '#416FE3', '#5ECD70', '#E3A341', '#E34141', '#ffffff'];

  @Input() activateSelector: boolean = false;

  @Output() newCategoryEmiter = new EventEmitter<Categoria>();

  inputCategory: string = '';

  selectedColor: string = '#ffffff';

  selectColor(color: string) {
    this.selectedColor = color;
  }

  createCategory(event: KeyboardEvent) {
    let resetFieds = false;

    if (event.key === 'Enter') {
      const newCategory: Categoria = {
        title: this.inputCategory,
        color: this.selectedColor
      }
      this.newCategoryEmiter.emit(newCategory)
      resetFieds = true;
    }

    if (resetFieds) {
      this.inputCategory = '';
      this.selectedColor = '#ffffff';
    }
  }
}
