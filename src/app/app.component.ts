import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterPageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'security-force-front';
}
