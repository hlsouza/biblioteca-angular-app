import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { AdicionaLivroComponent } from './adiciona-livro/adiciona-livro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'livros/listar',
    component: ListaLivrosComponent
  },
  {
    path: 'livros/adicionar',
    component: AdicionaLivroComponent
  },
  {
    path: 'livros/editar/:key',
    component: AdicionaLivroComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  
  //quando digitar uma rota inexistente, aponta para a rota padrao "/", tem que ficar na última rota
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
