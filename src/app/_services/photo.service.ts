import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../_models/image.model';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages() {
        return this.http.get<any>('assets/demo/data/photos.json')
            .toPromise()
            .then(res => res.data as Image[])
            .then(data => data);
    }
}
