import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import { LoginComponent }

const routes: Routes = [
  // { path: 'login', component: null },
  // { path: 'overview', component: null },
  // { path: 'admin', component: null },
  // { path: 'projects', component: null },
  // { path: 'inventory', component: null },
  // { path: 'shop', component: null },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
