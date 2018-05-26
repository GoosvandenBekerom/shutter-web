import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from '../constants';

@Injectable()
export class UploadImageService {
  constructor(private http: HttpClient) { }

  upload(image: File) {
    const data = new FormData();
    data.set('file', image);
    data.append('services[]', 'service');
    data.append('services[]', 'service2');
    data.append('services[]', 'service3');

    this.http.post(`${API_BASE_URL}/upload`, data)
      .subscribe((imageId: String) => console.log(imageId), err => console.error(err.error));
  }
}
