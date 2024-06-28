import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumServiceService } from '../../services/album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumServiceService){ // mi rendo conto di aver fatto un casino coi nomi :') farò meglio d'ora in avanti

  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }
}
