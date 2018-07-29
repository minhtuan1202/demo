import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

// import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    // FlexLayoutModule
  ],
  declarations: [],
  exports:[
    // FlexLayoutModule
  ]
})
export class SharedModule { }
