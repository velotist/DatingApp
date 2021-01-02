import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any
  model: any = {}

  constructor() { }

  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  register() {
    console.log(this.model)
  }

  // tslint:disable-next-line: typedef
  cancel() {
    console.log('cancelled')
  }
}
