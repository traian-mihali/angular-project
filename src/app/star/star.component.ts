import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.less']
  // inputs: ["isFavorite"]
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class StarComponent {
  @Input('is-favorite')
  isFavorite: boolean;

  @Output('change') click: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ state: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  state: boolean;
}
