import { Component, OnInit } from '@angular/core';
import data from 'src/assets/json/data.json';

@Component({
  selector: 'app-menu-soportes',
  templateUrl: './menu-soportes.component.html',
  styleUrls: ['./menu-soportes.component.scss']
})
export class MenuSoportesComponent implements OnInit {
  principal = 0;
  Datas: any = data;

  constructor() { }

  ngOnInit(): void {
  }

}
