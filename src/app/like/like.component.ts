import { Component, Input } from '@angular/core';

@Component({
  selector: 'fontawesome-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.less']
})
export class LikeComponent {
  @Input() likesCount = 0;
  @Input() isActive = true;

  onChange() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
  }
}
