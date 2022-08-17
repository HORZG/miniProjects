import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventUrl : string = 'http://localhost:3000/events';
  idConnectedUser = sessionStorage.getItem('id');

  constructor( private httpClient : HttpClient) { }

// add event

addEvent(obj, img:File){
  let formData = new FormData();
  formData.append('title', obj.title);
  formData.append('date', obj.date);
  formData.append('description', obj.description);
  formData.append('price', obj.price)
  formData.append('img',img);

  
return this.httpClient.post<{message : any}>(this.eventUrl, formData);
}

participateToEvent(obj){
return this.httpClient.post<{message : any}>(`${this.eventUrl}/participate/${this.idConnectedUser}`,obj)

}

getAllEvents ()
{
  return this.httpClient.get<{eventsKey : any}>(this.eventUrl)
}

getAllMyEvents(id){
  return this.httpClient.get<{result : any}>(`${this.eventUrl}/${this.idConnectedUser}/participatedEvent`)
}

getEventById(id)
{
  return this.httpClient.get<{eventKey : any}>(`${this.eventUrl}/${id}`)
}


getEventByPrice(price){
return this.httpClient.get<{eventsKey : any}>(`${this.eventUrl}/byprice/${price}`)
}

editEvent(id) {
return this.httpClient.put<{message: any}>(this.eventUrl, id)

}

deleteEventById(id){

  return this.httpClient.delete<{message : any}>(`${this.eventUrl}/${id}`,id)
}

deleteImportantEvent (id){
return this.httpClient.delete<{message :any}>(`${this.eventUrl}/deleteimportantevent/${id}`,id)
}




}
