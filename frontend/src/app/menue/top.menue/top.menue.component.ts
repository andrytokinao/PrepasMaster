import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menue',
  templateUrl: './top.menue.component.html',
  styleUrls: ['./top.menue.component.css']
})
export class TopMenueComponent {
  sousMenues: any[] = [
    { titre: 'Menu 1', lien: '/menu1' },
    { titre: 'Menu 2', lien: '/menu2' },
    { titre: 'Menu 3', lien: '/menu3' }
  ];
  filter : any[] = [];

}
