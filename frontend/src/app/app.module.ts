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
import {MatSidenavModule} from '@angular/material/sidenav';
import { DialogUserFormComponent } from './components/pop-ups/user-form/dialog-user-form/dialog-user-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProjectFormComponent } from './components/pop-ups/project-form/project-form.component';
import { ProjecrFormDialogComponent } from './components/pop-ups/project-form/projecr-form-dialog/projecr-form-dialog.component';
import { ComponentFormComponent } from './components/pop-ups/component-form/component-form.component';
import { ComponentFormDialogComponent } from './components/pop-ups/component-form/component-form-dialog/component-form-dialog.component';
import { UserFormComponent } from './components/pop-ups/user-form/user-form.component';
import { AttachmentsFormComponent } from './components/pop-ups/attachments-form/attachments-form.component';
import { AttachmentsFormDialogComponent } from './components/pop-ups/attachments-form/attachments-form-dialog/attachments-form-dialog.component';
import { EditProjectOverviewDialogComponent } from './components/pop-ups/edit-project-overview-dialog/edit-project-overview-dialog.component';
import { OrdersFormComponent } from './components/pop-ups/orders-form/orders-form.component';
import { OrdersFormDialogComponent } from './components/pop-ups/orders-form/orders-form-dialog/orders-form-dialog.component';
import { TemplateFormComponent } from './components/pop-ups/template-form/template-form.component';
import { TemplateFormDialogComponent } from './components/pop-ups/template-form/template-form-dialog/template-form-dialog.component';


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
    HeaderComponent,
    DialogUserFormComponent,
    ProjectFormComponent,
    ProjecrFormDialogComponent,
    ComponentFormComponent,
    ComponentFormDialogComponent,
    UserFormComponent,
    AttachmentsFormComponent,
    AttachmentsFormDialogComponent,
    EditProjectOverviewDialogComponent,
    OrdersFormComponent,
    OrdersFormDialogComponent,
    TemplateFormComponent,
    TemplateFormDialogComponent
  ],
  entryComponents:[DialogUserFormComponent, ProjecrFormDialogComponent,ComponentFormDialogComponent,
    AttachmentsFormDialogComponent,EditProjectOverviewDialogComponent, OrdersFormDialogComponent, TemplateFormDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    DemoMaterialModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
