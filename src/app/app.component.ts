import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutMainComponent } from './components/layout-principal/layout-principal.component';
import { LayoutTabelaDadosComponent } from "./components/layout-tabela-dados/layout-tabela-dados.component";
import { SelectCategoryComponent } from "./components/select-category/select-category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutTabelaDadosComponent, LayoutMainComponent, SelectCategoryComponent],
  template: `
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'security-force-front';
}
