import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TVShowsComponent } from './TvShows/TvShows.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'movies', component: TVShowsComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]; 