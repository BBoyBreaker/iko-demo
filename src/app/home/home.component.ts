import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

// models
import { EpubSample } from '../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  // books list
  books: EpubSample[] = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });

    // init the books
    this.initBooks();
  }

  /**
   * initializing books array with data
   */
  initBooks(): void {
    var bookNumber: number = 1;

    // create 10 books
    for(let i: number = 0; i<10; i++) {

      // init each book alone
      const book: EpubSample = {
        title: `title-${i}`,
        file: `demo${bookNumber}.epub`,
        description: `Some example text some example text. epubFile description goes here`
      };

      // add the book to the array
      this.books.push(book);

      // change the file
      if(bookNumber == 1) {
        bookNumber = 2;
      } else {
        bookNumber = 1;
      }
    }
  }

}
