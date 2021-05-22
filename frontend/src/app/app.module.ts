import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { InventoryOverviewComponent } from './pages/inventory-overview/inventory-overview.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PopUpsComponent } from './components/pop-ups/pop-ups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from "@angular/material/icon";
import { DemoMaterialModule } from "./material-module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserOverviewComponent,
    AdminOverviewComponent,
    ProjectOverviewComponent,
    InventoryOverviewComponent,
    ShopComponent,
    PopUpsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
