import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cat } from './cat.model';
import { createCats } from './cats.mock';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private cats = new BehaviorSubject<Cat[]>([]);

  cats$ = this.cats.asObservable();

  setCats(incomingCats: Cat[] = []) {
    this.cats.next(incomingCats);
  };

  constructor() { 
    this.cats.next(createCats());
  }
}
