import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-hash-abierta',
  templateUrl: './hash-abierta.component.html',
  styleUrls: ['./hash-abierta.component.css'],
  animations: [routerTransition()]
})
export class HashAbiertaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
