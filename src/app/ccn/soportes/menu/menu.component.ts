import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import data from 'src/assets/json/data.json';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  principal = 0;
  Datas: any = data;




  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
   }


  ngOnInit(): void {
  }

}
