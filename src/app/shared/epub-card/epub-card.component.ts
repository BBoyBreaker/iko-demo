import { Component, OnInit, Input } from '@angular/core';

// models
import { EpubSample } from '../../core/models';

@Component({
  selector: 'app-epub-card',
  templateUrl: './epub-card.component.html',
  styleUrls: ['./epub-card.component.scss']
})
export class EpubCardComponent implements OnInit {

  @Input() book: EpubSample;

  constructor() { }

  ngOnInit() {
  }

  /**
   * open epub page
   * @param book the book to open
   */
  openEpub(book: EpubSample): void {
    console.log(book);
  }

}
