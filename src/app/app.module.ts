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
import { MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProjectOverviewDialogComponent } from './components/pop-ups/edit-project-overview-dialog/edit-project-overview-dialog.component';
import { FieldDialogComponent } from './components/pop-ups/field-dialog/field-dialog.component';
import { TemplateDialogComponent } from './components/pop-ups/template-dialog/template-dialog.component';
import { ComponentDialogComponent } from './components/pop-ups/component-dialog/component-dialog.component';
import { FieldAnswersDialogComponent } from './components/pop-ups/field-answers-dialog/field-answers-dialog.component';
import {MatMenuModule } from '@angular/material/menu';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatNativeDateModule} from "@angular/material/core";

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
    EditProjectOverviewDialogComponent,
    FieldDialogComponent,
    TemplateDialogComponent,
    ComponentDialogComponent,
    FieldAnswersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    DemoMaterialModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
