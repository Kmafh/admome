import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-menulogin',
  templateUrl: './menulogin.component.html',
  styleUrls: ['./menulogin.component.css']
})
export class MenuloginComponent implements OnInit {

  public usuario : Usuario= new Usuario();
  habilitar:boolean=false;
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)?false:true;
  }
  constructor(public usuarioService: UsuarioService, private router: Router, private activateRoute: ActivatedRoute) { }

  login() {
    const user = { nombre: this.usuario.nombre, password: this.usuario.password };
    this.usuarioService.login(user).subscribe(data => {
      console.log("Algo")
    }); 
  
  }
  getUserLogged() {
    this.usuarioService.getUser().subscribe(user => {
      console.log(user);
    });
  }
  ngOnInit(): void {
  }

}

