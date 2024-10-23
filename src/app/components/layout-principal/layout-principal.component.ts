import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.css'
})
export class LayoutPrincipalComponent {

  colors: string[] = ['#9C5ECD', '#416FE3', '#5ECD70', '#E3A341', '#E34141', '#ffffff'];

  inputCategory: string = '';
  selectedColor: string = '#ffffff';
  isActive: boolean = false;

  selectColor(color: string) {
    this.selectedColor = color;
  }

  AddCategory() {
    this.isActive = true;
  }

  newCategory(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const newCategoryObject = {
        title: this.inputCategory,
        color: this.selectedColor
      }

      this.isActive = false;
      this.inputCategory = '';
      this.selectedColor = '#ffffff';
    } else if (event.key === 'Escape') {
      this.isActive = false;
    }
  }

}
