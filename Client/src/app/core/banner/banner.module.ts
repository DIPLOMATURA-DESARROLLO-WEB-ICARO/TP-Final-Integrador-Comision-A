import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, BannerRoutingModule],
  exports: [BannerComponent],
})
export class BannerModule {}
