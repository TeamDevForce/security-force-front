import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutPrincipalComponent } from './components/layout-principal/layout-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutPrincipalComponent],
  template: `
    <router-outlet />
    <app-layout-principal></app-layout-principal>
  `,
  styles: [],
})
export class AppComponent {
  title = 'security-force-front';
}
