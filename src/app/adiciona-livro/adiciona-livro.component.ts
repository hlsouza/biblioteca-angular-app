import { Component, OnInit, Input } from "@angular/core";
import { Livro } from "../modelo/Livro";
import { LivroService } from "../service/livroService";
import { AlertsService } from "angular-alert-module";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-adiciona-livro",
  templateUrl: "./adiciona-livro.component.html",
  styleUrls: ["./adiciona-livro.component.scss"]
})
export class AdicionaLivroComponent implements OnInit {
  livro: Livro;
  livro$: Observable<Livro>;

  constructor(
    private _livroService: LivroService,
    private _alerts: AlertsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.livro = new Livro();
    this.route.paramMap.subscribe(param => {
      this.livro$ = this._livroService.get(param.get("key"));
      //console.log(`KEY RECEBIDA: ${param.get("key")}`);
      if(this.livro$ == null) return;
      this.livro$.subscribe(valor => {
        //console.log(`SUBSCRIBED: ${JSON.stringify(valor)}`);
        this.livro = valor;
        this.livro.key = param.get("key");
      }
      );
    })

  }

  dadosValidos(): boolean {
    if (
      this.livro.nome == null ||
      this.livro.nome == "" ||
      this.livro.autor == null ||
      this.livro.autor == "" ||
      this.livro.ano == null ||
      this.livro.ano == undefined
    )
      return false;
    else return true;
  }

  adicionar(livro: Livro) {
   
    if (livro.key != null && this.dadosValidos()) {
      //console.log(`UDPATING`)
      this._livroService.update(livro, this.livro.key);
      //this._alerts.setMessage("Livro editado!", "success");
      this.router.navigateByUrl("/livros/listar");
    } else if (livro.key == null && this.dadosValidos()) {
        this._livroService.insert(livro);
        //this._alerts.setMessage("Livro adicionado!", "success");
        this.router.navigateByUrl("/livros/listar");
      } else this._alerts.setMessage("Nenhum campo pode ser vazio!", "error");
  
  }

}
