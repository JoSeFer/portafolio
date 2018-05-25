import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
productos: any[] = [];
cargando = true;
  constructor(private http: Http) {
    this.cargar_productos();
   }

  public cargar_productos() {
    this.cargando = true;
      this.http.get('https://paginawebtpa.firebaseio.com/productos_idx.json').subscribe( res => {
        // console.log(res.json());
        this.productos = res.json();
        this.cargando = false;
      });
  }

}
