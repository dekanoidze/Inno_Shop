import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

function passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirm = form.get('confirmPassword')?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  showPassword = false;
  showConfirm = false;
  isLoading = false;

  registrationForm = new FormGroup(
    {
      firstName:       new FormControl('', Validators.required),
      lastName:        new FormControl('', Validators.required),
      email:           new FormControl('', [Validators.required, Validators.email]),
      phone:           new FormControl('', [Validators.required, Validators.pattern(/^\+?[\d\s\-]{7,15}$/)]),
      password:        new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', Validators.required),
      terms:           new FormControl(false, Validators.requiredTrue),
    },
    { validators: passwordMatchValidator }
  );

  getControl(name: string) {
    return this.registrationForm.get(name);
  }

  isInvalid(name: string): boolean {
    const control = this.getControl(name);
    return !!(control?.invalid && control?.touched);
  }

  get passwordStrength() {
    const val: string = this.getControl('password')?.value ?? '';
    const strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val) && val.length >= 10;
    const medium = /(?=.*[a-zA-Z])(?=.*\d)/.test(val) && val.length >= 8;

    if (strong) return { width: '100%', color: '#43E97B', label: 'Strong' };
    if (medium) return { width: '60%',  color: '#FFA502', label: 'Medium' };
    return         { width: '30%',  color: '#FF4757', label: 'Weak' };
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    // TODO: call AuthService
    setTimeout(() => { this.isLoading = false; }, 2000);
  }
}