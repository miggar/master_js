import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: string;

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.userId = '1';
   }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.peticionesService.getUser(this.userId)
    .subscribe(
      result => {
        // console.log(result.data);
        this.user = result.data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
