import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
