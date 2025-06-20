import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiraStatusComponent } from './tira-status.component';
import { UpdateCustomerInfoComponent } from './update-customer-info/update-customer-info.component';
import { UpdateVehicleInfoComponent } from './update-vehicle-info/update-vehicle-info.component';



const routes: Routes = [
  {
    path: '',
    component: TiraStatusComponent,
  },
  {
    path: 'customer-info',
    component: UpdateCustomerInfoComponent,
  },
  {
    path: 'vehicle-info',
    component: UpdateVehicleInfoComponent,
  },
  /*{
    path: 'customerSelection',
    loadChildren: () => import('../customer-selection/customer-selection.module').then(m => m.CustomerSelectionModule),
    data: {
      preload: true,
      title: "Customer Selection",
      breadcrumb: 'Customer Selection',
    }
  },*/
  // {
  //   path: 'customerDetails',
  //   loadChildren: () => import('../update-customer-details/update-customer-details.module').then(m => m.UpdateCustomerDetailsModule),
  //   data: {
  //     preload: true,
  //     title: "Update Customer Details",
  //     breadcrumb: 'Update Customer Details',
  //   }
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiraStatusRoutingModule {}
