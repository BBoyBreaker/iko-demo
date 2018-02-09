import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { EpubRoutingModule } from './epub-routing.module';
import { EpubComponent } from './epub.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    EpubRoutingModule,
    FormsModule
  ],
  declarations: [
    EpubComponent
  ]
})
export class EpubModule { }
