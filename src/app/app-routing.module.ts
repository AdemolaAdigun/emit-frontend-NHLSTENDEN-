import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { InventoryOverviewComponent } from './pages/inventory-overview/inventory-overview.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import {GuardService} from "./guard-service/guard.service";


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuardService] },
  { path: 'project-overview', component: ProjectOverviewComponent, canActivate: [GuardService] },
  { path: 'inventory-overview', component: InventoryOverviewComponent, canActivate: [GuardService] },
  { path: 'shop', component: ShopComponent, canActivate: [GuardService] },
  { path: 'user', component: UserOverviewComponent, canActivate: [GuardService] },
  { path: 'admin', component: AdminOverviewComponent, canActivate: [GuardService] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
