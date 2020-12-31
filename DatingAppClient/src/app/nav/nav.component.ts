import { AccountService } from './../_services/account.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean

  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response)
        this.loggedIn = true
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.loggedIn = false
  }
}
