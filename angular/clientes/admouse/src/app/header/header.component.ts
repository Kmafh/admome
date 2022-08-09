import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
   public titulo:string="AdMouse";
   public usuario : Usuario= new Usuario();
   public login : boolean=true;
   constructor(private usuarioService: UsuarioService,private router: Router){}

   create():void{
    this.usuarioService.create(this.usuario)
    .subscribe(usuario => {
      this.router.navigate(['/'])
    swal('Nuevo Usuario',`Enviado email a ${usuario.email} para confirmar registro`,'success')
   }
    );
}
}
