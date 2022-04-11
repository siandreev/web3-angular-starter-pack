/**
 * Функция вычисляет баланс переданного адреса в эфирах и токенах weenus
 * @param address целевой адес для вычисления баланса
 * @param web3 настроенный экземпляр web3
 * @return {Promise<{eth: string, weenus: string}>} балансы
 */
export async function getBalance(web3, address) {
    return {
        eth: '',
        weenus: ''
    }
}
