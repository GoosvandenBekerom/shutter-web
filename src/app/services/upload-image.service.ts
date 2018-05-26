import { Injectable } from '@angular/core';

@Injectable()
export class UploadImageService {
  constructor() { }

  upload(files: File[]) {
    console.log(files);
    // TODO: upload image to web serice
  }
}
