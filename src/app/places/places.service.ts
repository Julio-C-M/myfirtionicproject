import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id:'1',
      title:'Eifel Tower',
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments:['Awesome place','Wonderfull Experience']
    },
    {
      id:'2',
      title:'Statue of Liberty',
      imageURL:'https://imgs-akamai.mnstatic.com/f7/5e/f75e0ffe691e5e4b53c19e68e84e3853.jpg',
      comments:['Awesome place','Wonderfull Experience']
    },
    {
      id:'3',
      title:'Awesome place',
      imageURL:'https://imgs-akamai.mnstatic.com/f7/5e/f75e0ffe691e5e4b53c19e68e84e3853.jpg',
      comments:[]
    }

  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }  

  getPlace(placeId: string) {
    return {
      ...this.places.find(place  => {
      return place.id === placeId
    })
  }
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + "" 
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place =>{
      return place.id !== placeId;
    })

  }



}
