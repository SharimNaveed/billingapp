import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakebillComponent } from './components/makebill/makebill.component';
import { ProductComponent } from './components/product/product.component';
import { BillhistoryComponent} from './components/billhistory/billhistory.component';

const routes: Routes = [
  {
    path : 'newBill',
    component: MakebillComponent
  },
  {
    path : 'product',
    component : ProductComponent
  },
  {
    path : 'billHistory',
    component : BillhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
