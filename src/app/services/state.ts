import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class State {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  private toastSubject = new Subject<string>();

  favorites$ = this.favoritesSubject.asObservable();
  toast$ = this.toastSubject.asObservable();

  toggleFavorite(itemName: string) {
    const current = this.favoritesSubject.getValue();

    if (itemName && current.includes(itemName)) {
      this.favoritesSubject.next(current.filter((item) => item !== itemName));
      this.toastSubject.next(`Removed ${itemName} from favorites`);
    } else if (itemName) {
      this.favoritesSubject.next([...current, itemName]);
      this.toastSubject.next(`Added ${itemName} to favorites`);
    }
  }
}
