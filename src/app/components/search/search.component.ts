import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private _is: InformacionService) {

   }

  ngOnInit() {
  }

}
