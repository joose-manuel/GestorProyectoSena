// loader.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading = true; // Simulamos que algo está cargando

  constructor() {}

  ngOnInit(): void {
    // Simula la carga durante 10 segundos
    setTimeout(() => {
      this.isLoading = false; // Después de 10 segundos, desactiva el loader
    }, 1500);
  }
}
