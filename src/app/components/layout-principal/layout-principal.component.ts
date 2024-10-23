import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [FormsModule, CommonModule, DragDropModule],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.css'
})
export class LayoutPrincipalComponent {
  @ViewChild('categoriesList') categoriesList!: ElementRef;

  colors: string[] = ['#9C5ECD', '#416FE3', '#5ECD70', '#E3A341', '#E34141', '#ffffff'];

  categories = [
    { title: 'Redes', color: '#ff0000' },
  ];

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
    let shouldReset = false;

    if (event.key === 'Enter') {
      const newCategoryObject = {
        title: this.inputCategory,
        color: this.selectedColor
      }
      this.categories.push(newCategoryObject);
      this.scrollToLastCategory();
      shouldReset = true;
    } else if (event.key === 'Escape') {
      this.isActive = false;
      shouldReset = true;
    }

    if (shouldReset) {
      this.isActive = false;
      this.inputCategory = '';
      this.selectedColor = '#ffffff';
    }

  }

  hasScrolled = false;
  isAtBottom = false;

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


}
