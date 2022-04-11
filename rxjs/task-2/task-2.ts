import {Observable, of} from "rxjs";
import {getUserById, getTokenByAddress, getTokenImgBySymbol} from "./utils.js";

export interface Token { address: string, symbol: string }
export interface User { id: number, favoriteTokenAddress: string; name: string }
export interface Image { url: string, caption: string }

export type GetUserByIdFn = (userId: number) => Observable<User>;
export type GetTokenByAddressFn = (address: string) => Observable<Token>;
export type GetTokenImgBySymbolFn = (tokenSymbol: string) => Observable<Image>;


function getUserFavoriteTokenImage(userId): Observable<Image> {
   // TODO
   return of(null);
}

const testUserId = 1;
getUserFavoriteTokenImage(testUserId).subscribe(console.log);
