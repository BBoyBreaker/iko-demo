import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { EpubCardComponent } from './epub-card/epub-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    EpubCardComponent,
  ],
  exports: [
    LoaderComponent,
    EpubCardComponent
  ]
})
export class SharedModule { }
