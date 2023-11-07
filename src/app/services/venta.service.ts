
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaI } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/ventas`
  constructor(private http:HttpClient) {  }

  getAllVenta():Observable<{venta:VentaI[]}>{
    return this.http
      .get<{venta:VentaI[]}>(this.base_path)
  }
}
