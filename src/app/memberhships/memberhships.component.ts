import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-memberhships',
  templateUrl: './memberhships.component.html',
  styleUrls: ['./memberhships.component.css']
})
export class MemberhshipsComponent implements OnInit {
  baseURL = 'http://206.189.180.232:3000/admin/memberships';
  posts;
  //memberships;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    const token = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxNDE0Njk0N30.KFzui3RoBVAhgRZc2OO4vV0QDSoH8UKb2ViCaV5V6NA");
    let header = new HttpHeaders().set( "access-token", token);

    this.http.get("http://206.189.180.232:3000/admin/memberships/get_all_memberhships",
     {headers:header}).subscribe(users => {
      this.posts = users;
    });
  }
}
