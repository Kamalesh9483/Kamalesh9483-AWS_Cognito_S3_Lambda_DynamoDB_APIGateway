import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cognito-UI';
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService) {}
  async onSubmit() {
    try {
      const response = await this.authService.signIn(this.username, this.password);
      const accessToken = response.AuthenticationResult?.AccessToken;
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        console.log('Sign-in successful');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  }
}


