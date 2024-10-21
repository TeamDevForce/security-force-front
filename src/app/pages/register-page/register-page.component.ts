import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BuscaEstadosCidadesService } from '../../services/busca-estados-cidades.service';
import { LayoutFormularioComponent } from '../../components/layout-formulario/layout-formulario.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LayoutFormularioComponent],
  templateUrl:'./register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;
  public estados: any[] = [];
  cidades: any[] = [];

  constructor(
    private toastService: ToastrService,
    private buscaEstadosCidadesService: BuscaEstadosCidadesService
  ) {
    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      idade: new FormControl('', [Validators.required, Validators.min(1)]),
      sexo: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cidade: new FormControl({ value: '', disabled: true }, Validators.required),
      estado: new FormControl('', Validators.required),
      cep: new FormControl('', [Validators.required, Validators.pattern('\\d{5}-?\\d{3}')]),
      senha: new FormControl('', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
      senhaRepetida: new FormControl('', Validators.required),
    }, { validators: this.customPasswordMatching.bind(this) });
  }

  ngOnInit(): void {
    this.buscaEstadosCidadesService.buscarEstados().subscribe({
      next: (data) => {
        this.estados = data;
      },
      error: () => {
        console.error('Erro ao carregar estados');
      }
    });
  
    this.registerForm.get('estado')?.valueChanges.subscribe((estadoSigla) => {
      if (estadoSigla) {
        const estadoSelecionado = this.estados.find(estado => estado.sigla === estadoSigla);
        if (estadoSelecionado) {
          this.buscarCidades(estadoSelecionado.id);
          this.registerForm.get('cidade')?.enable();
        }
      } else {
        this.registerForm.get('cidade')?.disable();
      }
    });
  }

  buscarCidades(estadoId: number): void {
    this.buscaEstadosCidadesService.buscarCidades(estadoId).subscribe({
      next: (data) => {
        this.cidades = data;
      },
      error: () => {
        console.error('Erro ao carregar cidades');
      }
    });
  }

  private customPasswordMatching(control: AbstractControl): ValidationErrors | null {
    const senhaControl = control.get('senha');
    const senhaRepetidaControl = control.get('senhaRepetida');

    if (!senhaControl || !senhaRepetidaControl) {
      return null;
    }
    const senha = senhaControl.value;
    const senhaRepetida = senhaRepetidaControl.value;
    return senha === senhaRepetida ? null : { senhaMismatchError: true };
  }

  getFieldError(fieldName: string): string | null {
    const field = this.registerForm.get(fieldName);
    if (field && field.touched && field.invalid) {
      if (field.errors?.['required']) {
        if (fieldName !== 'senhaRepetida') {
          return 'Este campo é obrigatório.';
        }
      }
      if (field.errors?.['minlength']) {
        return `O campo precisa ter pelo menos ${field.errors['minlength'].requiredLength} caracteres.`;
      }
      if (field.errors?.['email']) {
        return 'Digite um e-mail válido.';
      }
      if (field.errors?.['pattern']) {
        return 'Formato incorreto inserido!';
      }
    }
    return null;
  }

  submit() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log(registerData);
      this.toastService.success('Registro feito com sucesso!');
      this.registerForm.reset();
    } else {
      this.toastService.error('Erro no cadastro! Revise os campos e tente novamente.');
    }
  }
}
