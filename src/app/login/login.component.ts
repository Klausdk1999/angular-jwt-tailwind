import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (data) => {
        console.log('Login successful', data);
        alert('Login successful');
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    );
  }
}
