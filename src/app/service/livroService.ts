import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Livro } from "../modelo/Livro";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LivroService {
  constructor(private _db: AngularFireDatabase) {}

  insert(livro: Livro) {
    this._db
      .list("livro")
      .push(livro)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(livro: Livro, key: string) {
    this._db
      .list("livro")
      .update(key, livro)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this._db
      .list("livro")
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  get(key: String){
    if (key == null){
      return;
    }
    //console.log("ENTREI NO GET");    
    return this._db.object<Livro>(`livro/${key}`).valueChanges();    
  }

  delete(key: string) {
    this._db.object(`livro/${key}`).remove();
  }
}
