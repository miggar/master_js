import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
  public url: string;

  constructor() {
    this.url = Global.url;
  }

  makeFileRequest(
    url: string,
    params: Array<string>,
    files: Array<File>,
    name: string
  ): Promise<any> {
      // Eliminar
    console.log(files);
    console.log('hola');

    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (const it of files) {
        formData.append(name, it, it.name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
