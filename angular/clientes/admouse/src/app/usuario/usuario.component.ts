import { Component, OnInit } from '@angular/core';
import { Usuario} from './usuario';
import swap from 'sweetalert2';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

public usuario : Usuario= new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargarUsuario():void{
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe(
          (usuario) => this.usuario = usuario)
      }
    })
  }
  
}
