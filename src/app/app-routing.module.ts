import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums-list/albums-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "albums",
    component: AlbumsComponent
  },
  {
    path: "albums/:id",
    component: AlbumsComponent
  },
  {
    path: "photos?albumId=id",
    component: AlbumDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
