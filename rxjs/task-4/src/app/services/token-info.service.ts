import { Injectable } from '@angular/core';
import getTokenInfo from "../utils/token-info-mock";
import {Observable} from "rxjs";
import {TokenInfo} from "../models/TokenInfo";

@Injectable({
  providedIn: 'root'
})
export class TokenInfoService {

  constructor() { }

  private getTokenInfo(): Observable<TokenInfo> {
    return getTokenInfo();
  }
}
