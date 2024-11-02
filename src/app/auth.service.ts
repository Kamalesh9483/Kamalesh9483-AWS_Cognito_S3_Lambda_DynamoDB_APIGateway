// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  // SignInCommand,
  GetUserCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
} from '@aws-sdk/client-cognito-identity-provider';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private client = new CognitoIdentityProviderClient({
    region: 'YOUR_AWS_REGION', // e.g., 'us-east-1'
  });
  private clientId = 'YOUR_COGNITO_CLIENT_ID'; // Replace with your App Client ID

  // Sign Up
  async signUp(username: string, password: string, email: string) {
    const command = new SignUpCommand({
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: [{ Name: 'email', Value: email }],
    });

    try {
      const response = await this.client.send(command);
      console.log('Sign up successful:', response);
      return response;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }

  // Sign In
  async signIn(username: string, password: string) {
    const command = new InitiateAuthCommand({
      ClientId: this.clientId,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    try {
      const response = await this.client.send(command);
      console.log('Sign in successful:', response);
      return response;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }

  // Get User Info
  async getUser(accessToken: string) {
    const command = new GetUserCommand({
      AccessToken: accessToken,
    });

    try {
      const response = await this.client.send(command);
      console.log('User information:', response);
      return response;
    } catch (error) {
      console.error('Error getting user information:', error);
      throw error;
    }
  }

  // Sign Out
  async signOut(accessToken: string) {
    const command = new GlobalSignOutCommand({
      AccessToken: accessToken,
    });

    try {
      const response = await this.client.send(command);
      console.log('User signed out successfully:', response);
      return response;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }
}
