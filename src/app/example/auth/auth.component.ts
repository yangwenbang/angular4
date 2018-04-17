import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

/**
 * 守卫页面
 * 
 * @export
 * @class AuthComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService) {
    this.message = '';
  }

    ngOnInit() { }

    /**
     * 登录
     * 
     * @param {string} username
     * @param {string} password
     * @returns {boolean}
     * 
     * @memberOf AuthComponent
     */
    login(username: string, password: string): boolean {
        this.message = '';
        if(!this.authService.login(username, password)){
            this.message = '不正确的凭证 -- 用户名/密码分别为 tangjun/123';
            setTimeout(function(){
                this.message = '';
            }.bind(this), 3000);
        }

        return false;
    }

    /**
     * 退出 
     * 
     * @returns {boolean}
     * 
     * @memberOf AuthComponent
     */
    logout(): boolean{
        this.authService.logout();
        return false;
    }
}




/**
 * 登录跳转的页面
 * 
 * @export
 * @class ProtectedComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'protected',
    template: `
        <h1>Protected content</h1>
    `
})
export class ProtectedComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
