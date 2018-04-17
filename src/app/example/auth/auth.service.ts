import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    login(user: string, password: string): boolean{
        if(user === 'tangjun' && password === '123'){
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    }

    logout(){
        localStorage.removeItem('username');
    }

    getUser(){
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean{
        return this.getUser() !== null;
    }
}