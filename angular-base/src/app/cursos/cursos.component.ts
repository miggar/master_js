import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  public identificado: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.identificado = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      this.nombre = params.nombre;
      this.followers = +params.followers;

      if (params.nombre === 'ninguno') {
        this.router.navigate(['/home']);
      }
    });
  }

  redirigir(): void {
    this.router.navigate(['/zapatillas']);
  }

  setIdentificado(): void {
    this.identificado = true;
  }

  unsetIdentificado(): void {
    this.identificado = false;
  }
}
