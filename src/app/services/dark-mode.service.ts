import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private dartkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.dartkModeSubject.asObservable();

  constructor() { }

  toggleDarkMode(isDarkMode: boolean): void {
    this.dartkModeSubject.next(isDarkMode);
  }
}
