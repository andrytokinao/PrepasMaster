import { Component } from '@angular/core';
import {Config, Menu} from "./menue/type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prepa Master';
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Front-end',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { name: 'HTML', url: '#' },
        { name: 'CSS', url: '#' },
        { name: 'Javascript', url: '#' }
      ]
    },
    {
      name: 'Responsive web',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    {
      name: 'Web Browser',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    }
  ];
}
