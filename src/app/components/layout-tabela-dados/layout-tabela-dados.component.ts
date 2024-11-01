import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Credencial } from '../../models/credencial.model';

@Component({
  selector: 'app-layout-tabela-dados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-tabela-dados.component.html',
  styleUrl: './layout-tabela-dados.component.css'
})
export class LayoutTabelaDadosComponent {


  @Input() credencial: Credencial | null = null;


  emailCopied = false;
  passwordCopied = false

  copyToClipboard(value: string | undefined, type: "email" | "password") {
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      if (type === 'email') {
        this.emailCopied = true;
        setTimeout(() => {
          this.emailCopied = false;
        }, 2000);

      } else if (type === 'password') {
        this.passwordCopied = true;
        setTimeout(() => {
          this.passwordCopied = false;
        }, 2000);
      }

    });
  }


  showPassword(passwordInput: HTMLInputElement) {
    passwordInput.type = 'text';
  }

  hidePassword(passwordInput: HTMLInputElement) {
    passwordInput.type = 'password';
  }

  optionActive: boolean = false;

  enableOptions() {
    this.optionActive = true;
  }

  closeOptions() {
    this.optionActive = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    if (targetElement.closest('.item') || targetElement.classList.contains('manager-table')) {
      this.optionActive = false;
    }
  }


}
