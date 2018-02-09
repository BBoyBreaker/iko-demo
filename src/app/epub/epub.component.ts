import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { NavDataService } from '../core/nav-data.service';

// models
import { EpubSample } from '../core/models';

declare var ePub: any;
declare var EPUBJS: any;
declare var global: any;

@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.scss']
})
export class EpubComponent implements OnInit {

  book: EpubSample;
  Reader: any;
  currentPage: number;
  totalPages: number;

  constructor(
    private router: Router,
    private navDataService: NavDataService
  ) { }

  ngOnInit() {
    this.book = this.navDataService.storage;
    if(!this.book) {
      this.router.navigate(['/home']);
      return;
    }
    this.initFile();   
  }

  initFile() {
    // adding swipe listener
    EPUBJS.Hooks.register('beforeChapterDisplay').swipeDetection = function (callback: Function, renderer: any) {
      var script = renderer.doc.createElement('script');
      script.text = "!function(a,b,c){function f(a){d=a.touches[0].clientX,e=a.touches[0].clientY}function g(f){if(d&&e){var g=f.touches[0].clientX,h=f.touches[0].clientY,i=d-g,j=e-h;Math.abs(i)>Math.abs(j)&&(i>a?b():i<0-a&&c()),d=null,e=null}}var d=null,e=null;document.addEventListener('touchstart',f,!1),document.addEventListener('touchmove',g,!1)}";
      /* (threshold, leftswipe, rightswipe) */
      script.text += "(10,function(){parent.ePubViewer.nextPage()},function(){parent.ePubViewer.prevPage()});"
      renderer.doc.head.appendChild(script);
      if (callback) {
          callback();
      }
    };

    // init the epub reader from the file link
    this.Reader = ePub(`/assets/${this.book.file}`);

    // adding ePubViewer object to the browser window so we can trigger the next and previous from swipe listener
    global['ePubViewer'] = this.Reader;

    // render to the div id "reader"
    this.Reader.renderTo("reader");

    // generate pagination
    this.Reader.generatePagination();

    // getting the current and total pages number
    this.Reader.pageListReady.then((pageList: any) => {
      const currentCfi = this.Reader.getCurrentLocationCfi();
      this.currentPage = this.Reader.pagination.pageFromCfi(currentCfi);
      this.totalPages = this.Reader.pagination.totalPages;
    });

    // adding on page change handler to update the number of the current page
    this.Reader.on('book:pageChanged', (location: any) => {
        this.currentPage = location.anchorPage;
    });
  }
  
}
