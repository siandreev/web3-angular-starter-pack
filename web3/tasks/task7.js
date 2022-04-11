/**
 * Извлекает информацию из чека транзакции
 * @param web3 настроенный экземпляр web3
 * @param receipt чек транзакции
 * @return {Promise<{gasInEth: number, previousBase: number, gas: number}>} извлеченные данные
 */
export async function extractReceipt(web3, receipt) {
    return {
        gas: undefined,
        gasInEth: undefined,
        previousBase: undefined
    }
}
