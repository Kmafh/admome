import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuloginComponent } from './menulogin/menulogin.component';
import { BodyComponent } from './body/body.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioService } from './usuario/usuario.service';
import { ConsumoComponent } from './consumo/consumo/consumo.component';
import { CincuentaComponent } from './cincuenta/cincuenta/cincuenta.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AddTableRegisComponent } from './cincuenta/cincuenta/addtableregis/add-table-regis.component';

const routes: Routes = [
  
  {path: '',component:BodyComponent},
  {path: 'consumo',component:ConsumoComponent},
  {path: 'cincuenta',component:CincuentaComponent},
  {path: 'algo',component:CincuentaComponent},
  {path: 'login',component:MenuloginComponent},
  
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuloginComponent,
    BodyComponent,
    DirectivaComponent,
    UsuarioComponent,
    ConsumoComponent,
    AddTableRegisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
