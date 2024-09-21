import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

// No es necesario importar el CSS aquí si ya está en angular.json

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-innovac';

  ngOnInit(): void {
    Aos.init();
  }
}