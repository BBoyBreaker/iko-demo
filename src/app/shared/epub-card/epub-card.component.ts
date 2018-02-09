import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// services
import { NavDataService } from '../../core/nav-data.service';

// models
import { EpubSample } from '../../core/models';

@Component({
  selector: 'app-epub-card',
  templateUrl: './epub-card.component.html',
  styleUrls: ['./epub-card.component.scss']
})
export class EpubCardComponent implements OnInit {

  @Input() book: EpubSample;

  constructor(
    private navDataService: NavDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * open epub page
   * @param book the book to open
   */
  openEpub(book: EpubSample): void {
    this.navDataService.storage = book;
    this.router.navigate(['/epub']);
  }

}
