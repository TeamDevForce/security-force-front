import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-layout-formulario',
  standalone: true,
  imports: [],
  templateUrl: './layout-formulario.component.html',
  styleUrl: './layout-formulario.component.css'
})
export class LayoutFormularioComponent {
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
