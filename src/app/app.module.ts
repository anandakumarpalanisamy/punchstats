import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileDropModule } from 'ngx-file-drop';

import { AppRoutingModule } from './app.routes';
import { AppMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeePreviewListComponent } from './employee-preview-list/employee-preview-list.component';
import { EmployeePreviewComponent } from './employee-preview/employee-preview.component';

import { EmployeeDataService } from './services/employee-data.service';
import { EllipsisPipe } from './pipes/ellipsis';
import { EmployeeStatsComponent } from './employee-stats/employee-stats.component';
import { EmployeeStatsChartComponent } from './employee-stats/employee-stats-chart/employee-stats-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeePreviewListComponent,
    EmployeePreviewComponent,
    EmployeeStatsComponent,
    EmployeeStatsChartComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FileDropModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
