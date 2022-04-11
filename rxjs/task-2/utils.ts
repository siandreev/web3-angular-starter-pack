import {GetTokenByAddressFn, GetTokenImgBySymbolFn, GetUserByIdFn} from "./task-2";
import {of} from "rxjs";

export const getUserById: GetUserByIdFn = id => of({ id, favoriteTokenAddress: '0x00', name: 'Name' });

export const getTokenByAddress: GetTokenByAddressFn = address => of({ address: '0x00', symbol: 'ETH' });

export const getTokenImgBySymbol: GetTokenImgBySymbolFn = tokenSymbol => of({ url: 'https://example.com/image', caption: 'caption' });
