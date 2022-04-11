import {Observable, of, timer} from "rxjs";
import {TokenInfo} from "../models/TokenInfo";
import {mapTo} from "rxjs/operators";

let isFirstCall = true;

export default function getTokenInfo(): Observable<TokenInfo> {
    const holdersNumber = 200 + Math.round(1000 * Math.random());
    const price = Math.round((0.001 + Math.random()) * 1000) / 1000;
    const tokenInfo = { holdersNumber, price: price };

    const result = isFirstCall ? timer(4000).pipe(mapTo(tokenInfo)) : of(tokenInfo);
    isFirstCall = false;
    return result;
}
