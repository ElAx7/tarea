import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { GalleryListComponent } from './pages/gallery/gallery-list/gallery-list.component';
import { CreateGalleryComponent } from './pages/gallery/create-gallery/create-gallery.component';
import { GalleryDataComponent } from './pages/gallery/gallery-data/gallery-data.component';
import { EditGalleryComponent } from './pages/gallery/edit-gallery/edit-gallery.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'photos', component: GalleryComponent, children: [
    { path: '', component: GalleryListComponent }, 
    { path: 'create', component: CreateGalleryComponent },
    { path: ':id', component: GalleryDataComponent },
    { path: ':id/edit', component: EditGalleryComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
