import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from './myinterface';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  constructor(private http: Http) { }

  getFileSystem() {
        return this.http.get('../assets/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}
