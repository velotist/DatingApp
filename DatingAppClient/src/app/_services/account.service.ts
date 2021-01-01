import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from '../_models/user'

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/'
  private currentUserSource = new ReplaySubject<User>(1)
  currentUser$ = this.currentUserSource.asObservable()

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user)
        }
      })
    )
  }

  // tslint:disable-next-line: typedef
  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('user')
    this.currentUserSource.next(null)
  }
}
