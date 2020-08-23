import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor(private projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response) => {
        //console.log(response);
        this.projects = response.projects;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
