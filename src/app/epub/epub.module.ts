import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EpubRoutingModule } from './epub-routing.module';
import { EpubComponent } from './epub.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    EpubRoutingModule
  ],
  declarations: [
    EpubComponent
  ]
})
export class EpubModule { }
