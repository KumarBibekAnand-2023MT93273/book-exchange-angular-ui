import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MessagesComponent } from './messages/messages.component';
import { ExchangeRequestStatusComponent } from './exchange-request-status/exchange-request-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-listing', component: BookListingComponent },
  { path: 'messaging', component: MessagesComponent },
  { path: 'exchange-request-info', component: ExchangeRequestStatusComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
