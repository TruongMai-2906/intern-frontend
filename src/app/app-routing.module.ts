import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { EditnewitemsComponent } from './components/editnewitems/editnewitems.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { HomeComponent } from './components/home/home.component';
import { ItnewsComponent } from './components/itnews/itnews.component';
import { ItnewsitemsComponent } from './components/itnewsitems/itnewsitems.component';
import { LoginComponent } from './components/login/login.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { NewsformComponent } from './components/newsform/newsform.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",component:ItnewsComponent},
  {path:"Home",component:LoginComponent},
  {path:"ITNews",component:ItnewsComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"ITNewsItems",component:ItnewsitemsComponent},
  {path:"ITNews/ITNewsItems",component:ItnewsitemsComponent},
  {path:"NewsForm",component:NewsformComponent},
  {path:"EditNews",component:EditnewsComponent},
  {path:"ManageUser",component:ManageuserComponent},
  {path:"EditNews/EditNewsItem",component:EditnewitemsComponent},
  {path:"EditAccount",component:EditaccountComponent},
  {path:"ChangePasswordAccount",component:ChangepasswordComponent},
  {path:"**",component:ItnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
