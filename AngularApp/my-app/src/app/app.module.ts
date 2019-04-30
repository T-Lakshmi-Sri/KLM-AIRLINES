import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { KlmComponent } from './klm/klm.component';
import { StatisticsComponent } from './statistics/statistics.component';


const appRoutes = [
  {path: 'statistics',
    component: StatisticsComponent,
    children: [
      {
        path: 'statistics',
        redirectTo: 'travel/statistics'
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'travel/statistics',
        component: StatisticsComponent
      },
  ]
  },
  {
    path: '',
    component: KlmComponent,
    children: [
      {
        path: 'travel',
        pathMatch: 'prefix',
        redirectTo: 'airlines'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'airlines'
      },
      {
        path: 'airlines',
        redirectTo: 'travel/airlines'
      },
      {
        path: 'travel/airlines',
        component: KlmComponent
      },
      {
        path: 'airlines',
      component: KlmComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    KlmComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
