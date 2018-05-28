import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {API_BASE_URL} from '../constants';

@Injectable()
export class UploadImageService {
  constructor(private http: HttpClient) { }

  upload(image: File) {
    const data = new FormData();
    data.append('file', image);

    this.http.post(`${API_BASE_URL}/upload`, data)
      .subscribe((res: any) => console.log(res.imageId), err => console.error(err.error));
  }
}
