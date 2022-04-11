import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
