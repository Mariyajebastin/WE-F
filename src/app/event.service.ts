import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private refresh = new Subject<void>();



  refreshHeader() {
    this.refresh.next();
  }

  getRefreshObservable() {
    return this.refresh.asObservable();
  }

}
