import { Component, OnInit } from "@angular/core";
import { LivroService } from "../service/livroService";
import { Observable } from "rxjs";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-lista-livros",
  templateUrl: "./lista-livros.component.html",
  styleUrls: ["./lista-livros.component.scss"]
})
export class ListaLivrosComponent implements OnInit {
  livros: Observable<any>;
  
  constructor(
    private _livroService: LivroService,
    private _alerts: AlertsService
  ) {}

  ngOnInit() {
    this.livros = this._livroService.getAll();
  }

  delete(key: string) {
    try {
      this._livroService.delete(key);
      this._alerts.setMessage("Livro removido!", "success");
    } catch (error) {
      this._alerts.setMessage("Erro ao remover livro!", "error");
    }
  }

}
