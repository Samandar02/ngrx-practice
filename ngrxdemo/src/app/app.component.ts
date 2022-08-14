import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxdemo';
  public count$: Observable<number>
  constructor(
    private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
