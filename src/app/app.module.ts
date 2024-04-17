import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module'; 
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    // Your components
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    // Other module imports
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
