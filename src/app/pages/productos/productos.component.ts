import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServices } from '../../api/ProductoServices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  readonly productsSvs = inject(ProductServices);
  products$ = this.productsSvs.getAllProductos();
}
