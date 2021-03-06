import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent, ContactDialog } from './about/about.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'series', component: SeriesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SeriesComponent,
    ContactDialog,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    // FlexLayoutModule,
    ParallaxModule,
    MatDialogModule
  ],
  providers: [MatMenuModule],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialog]
})
export class AppModule { }
