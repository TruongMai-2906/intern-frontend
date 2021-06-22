import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ItnewsComponent } from './components/itnews/itnews.component';
import { LoginComponent } from './components/login/login.component';
import { ItnewsitemsComponent } from './components/itnewsitems/itnewsitems.component';
import { NewsformComponent } from './components/newsform/newsform.component';
import { RegisterComponent } from './components/register/register.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { EditnewitemsComponent } from './components/editnewitems/editnewitems.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    ContentComponent,
    ItnewsComponent,
    LoginComponent,
    ItnewsitemsComponent,
    NewsformComponent,
    RegisterComponent,
    EditnewsComponent,
    ManageuserComponent,
    EditnewitemsComponent,
    EditaccountComponent,
    ChangepasswordComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
