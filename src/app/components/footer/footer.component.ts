import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() onClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onClicked.emit();
  }
}
