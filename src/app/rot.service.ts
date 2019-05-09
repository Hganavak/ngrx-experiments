import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService {

  rotBanana(): Observable<any> {
    console.log('ROT BANANA');
    const milliseconds = 10000; // 10 secs
    return Observable.create(observer => { // Cool way of creating an observable with delay
      setTimeout(() => {
        console.log('Done waiting');
        observer.next('brown');
        observer.complete();
      }, milliseconds)
    })
  }

}