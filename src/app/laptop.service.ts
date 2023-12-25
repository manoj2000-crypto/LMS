import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private baseURL ="http://localhost:8081/laptopmanagementsystem.com"; 

  constructor(private httpClient: HttpClient) { }

  getLaptopsList(): Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseURL}/readAllLaptop`);
  }

  createLaptop(laptop: Laptop): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addLaptop`, laptop);
  }

  getLaptopById(laptopId: number): Observable<Laptop>{
    return this.httpClient.get<Laptop>(`${this.baseURL}/${laptopId}`);
  }

  updateLaptop(laptopId: number,laptop: Laptop): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateLaptop/${laptopId}`, laptop);
  }

  deleteLaptop(laptopId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteLaptop/${laptopId}`);
  }

}
