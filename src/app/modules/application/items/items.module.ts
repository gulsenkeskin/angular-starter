import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items.service';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule
  ],
  exports: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule { }
