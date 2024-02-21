import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import { OrdenDeCompra} from "../model/OrdenDeCompra.model";
//import { ResponsePagos } from "../model/response/ResponsePagos.model";

@Injectable({providedIn: 'root'})
export class PagoServices{

    private api= 'xxxxxxxxxx';
    private readonly _hhtp = inject(HttpClient);

   // enviarOrden(ordenDeCompra:OrdenDeCompra):Observable<ResponsePagos>{
     // return this._hhtp.post<any>(this.api,ordenDeCompra);
    //}

  }
