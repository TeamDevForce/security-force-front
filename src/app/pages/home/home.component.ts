import { Component } from '@angular/core';
import { LayoutMainComponent } from "../../components/layout-principal/layout-principal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
