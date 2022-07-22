import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  lists: any[] = [];
  constructor(private httpClient: HttpClient) {
  }

  listsCat(currentPage = 1) {
    return this.httpClient.get<any>('https://catfact.ninja/facts?page='+currentPage);
  }
}
