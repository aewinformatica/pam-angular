import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  authUrl = "http://pam-dev-ms-auth.esmenezes.com.br";
  constructor(private http: HttpClient, private router: Router) { }

    private armazenarToken(token: string) {
      localStorage.setItem("token", token);
    }

    login(email: string, password: string){

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const body = {
        roleName:3,
        email:email,
        password: password
      }

      return this.http.post(`${this.authUrl}/session/create`, body, { headers }).subscribe({
        next: () => {
          this.router.navigate(["dashboard"])
        },
        error: (erro:any) => {
          console.error('Erro na requisição POST:', erro);
        }
      }
      );
    };

};
