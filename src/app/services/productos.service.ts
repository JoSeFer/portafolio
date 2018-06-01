import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';


@Injectable()
export class ProductosService {
  productos: any[] = [];
  producto_filtrado: any[] = [];
  cargando = true;
  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://paginawebtpa.firebaseio.com/productos/${cod}.json`);
  }

  public buscar_producto(termino: string) {
   // console.log('Buscando producto');
   // console.log(this.productos.length);

    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // termino la carga
        this.filtrar_productos(termino);
      });
    } else {
      this.filtrar_productos(termino);
    }


  }

  private filtrar_productos(termino: string) {
    this.producto_filtrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLocaleLowerCase().indexOf(termino) >= 0) {
        this.producto_filtrado.push(prod);
      }
     // console.log(prod);
    });
  }

  public cargar_productos() {
    this.cargando = true;
    const promesa = new Promise((resolve, reject) => {
      this.http.get('https://paginawebtpa.firebaseio.com/productos_idx.json').subscribe(res => {
        // console.log(res.json());
        this.productos = res.json();
        this.cargando = false;
        resolve();
      });
    });
    return promesa;
  }

}
