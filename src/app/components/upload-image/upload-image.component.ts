import { Component, OnInit } from '@angular/core';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  constructor(private uploadService: UploadImageService) { }
  ngOnInit() {}

  upload(event) {
    this.uploadService.upload(event.files);
  }
}
