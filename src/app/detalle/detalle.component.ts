import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../rick-and-morty-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const characterId = +params['id'];
      this.getCharacterDetails(characterId);
    });
  }

  getCharacterDetails(id: number) {
    this.rickAndMortyService.getCharacterById(id).subscribe(
      (data) => {
        this.character = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
