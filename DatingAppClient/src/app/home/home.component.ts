import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false
  users: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers()
  }

  // tslint:disable-next-line: typedef
  registerToggle() {
    this.registerMode = !this.registerMode
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users)
  }
}
