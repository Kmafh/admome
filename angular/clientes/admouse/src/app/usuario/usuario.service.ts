import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  private url:string = 'http://localhost:8080/api/usuarios';
  usuario: Usuario[];
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http: HttpClient,private cookies: CookieService) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  create(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario,{headers: this.httpHeaders})
  }
  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/login", user);
  }
  getUsuario(id): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }
  setToken(token: string) {
    this.cookies.set("token",token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/usuarios/");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
