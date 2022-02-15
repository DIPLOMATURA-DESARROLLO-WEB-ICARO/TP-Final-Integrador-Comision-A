import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendBoxComponent } from './components/send-box/send-box.component';

const routes: Routes = [
  {
    path: '',
    component: SendBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendBoxRoutingModule {}
