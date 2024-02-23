import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServices } from '../../api/ProductoServices.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatPaginatorModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
 // readonly productsSvs = inject(ProductServices);
  productos$: Observable<any>;
  productosPaginados: any[] = [];
  totalProductos: number = 0;
  productosPorPagina: number = 12;
  paginaActual: number = 1;

  constructor(private productsSvs: ProductServices) {
    this.productos$ = this.productsSvs.getAllProductos();
  }

  ngOnInit(): void {
    this.productos$ = this.productsSvs.getAllProductos();
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos$.subscribe((productos) => {
      this.totalProductos = productos.length;
      const startIndex = (this.paginaActual - 1) * this.productosPorPagina;
      const endIndex = startIndex + this.productosPorPagina;
      this.productosPaginados = productos.slice(startIndex, endIndex);
    });
  }

  cambiarPagina(event: any) {
    this.paginaActual = event.pageIndex + 1; 
    this.cargarProductos();
  }
}
