import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: string;
  public fecha: any;

  public newUser: { name: string; job: string };
  public usuarioGuardado: any;

  constructor(private peticionesService: PeticionesService) {
    this.userId = '1';
    this.newUser = {
      name: '',
      job: '',
    };
  }

  ngOnInit(): void {
    this.fecha = new Date();
    this.loadUser();
  }

  loadUser(): void {
    this.user = false;
    this.peticionesService.getUser(this.userId).subscribe(
      (result) => {
        // console.log(result.data);
        this.user = result.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit(form): void {
    this.peticionesService.addUser(this.newUser).subscribe(
      (response) => {
        // console.log(response);
        this.usuarioGuardado = response;
        form.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
