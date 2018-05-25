import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
productos: any[] = [];
cargando_productos = true;
  constructor(private http: Http) {
    this.cargar_productos();
   }

  public cargar_productos() {

      this.http.get('https://paginawebtpa.firebaseio.com/productos_idx.json').subscribe( res => {
        console.log(res.json());
        this.productos = res.json();
        this.cargando_productos = false;
      });
  }

}
