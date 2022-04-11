import {of} from "rxjs";
import {GetUserNameFn, GetUserTokensFn, GetUserWalletsFn} from "./task-3";

export const getUserTokens: GetUserTokensFn = userId => of({ userId, tokens: ['0x00', '0x01'] });

export const getUserWallets: GetUserWalletsFn = userId => of({ userId, wallets: ['MetaMask', 'Coinbase'] });

export const getUserName: GetUserNameFn = userId => of({ userId, name: 'Name' });
