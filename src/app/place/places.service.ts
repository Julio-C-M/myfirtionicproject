import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  getPlaces(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
