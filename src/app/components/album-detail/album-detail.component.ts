import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { AlbumServiceService } from '../../services/album-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  photos?: Photo;

  constructor(private albumService: AlbumServiceService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    
  }
}
