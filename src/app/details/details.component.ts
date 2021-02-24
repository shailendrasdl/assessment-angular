import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    posts;
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      let membershipId = params;
      var id = membershipId.membership_id;

      const token = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxNDE0Njk0N30.KFzui3RoBVAhgRZc2OO4vV0QDSoH8UKb2ViCaV5V6NA");
      let header = new HttpHeaders().set( "access-token", token);

      this.http.get(`http://206.189.180.232:3000/admin/memberships/get_all_memberhships?membershipId=${id}`,
      {headers:header}).subscribe(users => {
        this.posts = users;
      });
    });
  }
}
