import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module'; 
import {MatInputModule} from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BookListingComponent } from './book-listing/book-listing.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { AddBookComponent } from './add-book/add-book.component';
import { ExchangeRequestDialogComponent } from './exchange-request-dialog/exchange-request-dialog.component';
import { MessagesComponent } from './messages/messages.component';
import { ExchangeRequestStatusComponent } from './exchange-request-status/exchange-request-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';






@NgModule({
  declarations: [
    // Your components
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    LoginComponent,
    NavigationComponent,
    BookListingComponent,
    AddBookComponent,
    ExchangeRequestDialogComponent,
    ExchangeRequestStatusComponent,
    MessagesComponent,
    UserProfileComponent,
  ],
  imports: [
    // Other module imports
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
