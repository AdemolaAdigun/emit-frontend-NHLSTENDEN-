import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { InventoryOverviewComponent } from './pages/inventory-overview/inventory-overview.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'inventory-overview', component: InventoryOverviewComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'user', component: UserOverviewComponent },
  { path: 'admin', component: AdminOverviewComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
