import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class RegistroServices{


    private readonly _hhtp = Inject(HttpClient);

    getAllProduct():Observable<any>{
        return this._hhtp.get('https://fakestoreapi.com/products')
    }




}
