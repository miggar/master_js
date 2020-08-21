import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService
  ) {
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
    // console.log(this.project);

    // Guardar datos
    this.projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
        if (response.project) {
          // Subir imagen
          this.uploadService
            .makeFileRequest(
              Global.url + 'upload-image/' + response.project._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'success';
              // console.log(result);
              form.reset();
            });
        } else {
          this.status = 'failed';
        }
        // console.log(response);
      },
      err => {
        console.error(err);
      }
    );
  }

  fileChangeEvent(fileInput: any): void {
    // console.log(fileInput);
    this.filesToUpload = fileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
  }
}
