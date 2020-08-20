import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;

  constructor(private projectService: ProjectService) {
    this.title = 'Crear proyecto';
    this.project = new Project(
      '',
      '',
      '',
      '',
      +new Date().getFullYear(),
      '',
      ''
    );
    this.status = '';
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    console.log(this.project);
    this.projectService.saveProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
        console.log(response);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
