import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { EpubRoutingModule } from './epub-routing.module';
import { EpubComponent } from './Epub.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    EpubRoutingModule
  ],
  declarations: [
    EpubComponent
  ],
})
export class EpubModule { }
