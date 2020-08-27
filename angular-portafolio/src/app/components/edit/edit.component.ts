import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { scrollToTop } from '../../services/utils';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public saveProject: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
    this.status = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.getProject(id);
    });
  }

  getProject(id: string): void {
    this.projectService.getProject(id).subscribe(
      (response) => {
        this.project = response.project;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    this.projectService.updateProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          // Subir imagen
          if (this.filesToUpload) {
            this.uploadService
              .makeFileRequest(
                Global.url + 'upload-image/' + response.project._id,
                [],
                this.filesToUpload,
                'image'
              )
              .then((result: any) => {
                this.saveProject = result.project;
                this.status = 'success';
                scrollToTop();
              });
          } else {
            this.saveProject = response.project;
            this.status = 'success';
            scrollToTop();
          }
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }
}
