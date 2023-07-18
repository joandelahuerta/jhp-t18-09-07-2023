import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.getRandomCharacters();
  }

  getRandomCharacters() {
    this.rickAndMortyService.getCharacters()
      .subscribe(
        (data) => {
          const randomIndexes = this.getRandomIndexes(data.results.length, 12); // Cambiar numero para enseñar más personajes
          this.characters = randomIndexes.map((index) => data.results[index]);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  // Indices random
  private getRandomIndexes(length: number, count: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
}
