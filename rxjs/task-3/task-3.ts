import {Observable, of} from "rxjs";
import {getUserTokens, getUserWallets, getUserName} from './utils.js';

export interface User { userId: number, name: string, tokens: string[], wallets: string[] }
export interface UserTokens { userId: number; tokens: string[] }
export interface UserWallets { userId: number; wallets: string[] }
export interface UserName { userId: number; name: string }

export type GetUserTokensFn = (userId: number) => Observable<UserTokens>;
export type GetUserWalletsFn = (userId: number) => Observable<UserWallets>;
export type GetUserNameFn = (userId: number) => Observable<UserName>;


function getUserById(userId: number): Observable<User> {
   // TODO
   return of(null);
}

const testUserId = 1;
getUserById(testUserId).subscribe(console.log);
