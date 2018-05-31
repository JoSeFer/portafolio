import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public _is: InformacionService, private router: Router) { }



  buscar_producto(termino: String) {
    this.router.navigate(['buscar', termino]);
    // console.log(termino);
  }

}
