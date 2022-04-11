import dotenv from 'dotenv';
import Web3 from 'Web3';

import { getBalance } from "./tasks/task1.js";
import { sendEth } from "./tasks/task2.js";
import { sendWeenus } from "./tasks/task3.js";
import { deployCalculator } from "./tasks/task4.js";
import { callMul } from "./tasks/task5.js";
import { changeBase } from "./tasks/task6.js";
import { extractReceipt } from "./tasks/task7.js";

dotenv.config();

async function main() {
    // #0 настройте web3: с помощью ТЕСТОВОГО приватного ключа и rpc ссылки на сеть Kovan.
    // Не укзывайте приватный ключ и rpc ссылку в индексируемыых git-ом файлах!
    const rpcLink = process.env.RPC;
    const privateKey = process.env.PRIVATE_KEY;
    const targetAddress = process.env.TARGET_ADDRESS;

    const web3 = null;

    // #1 Получите баланс TARGET_ADDRESS в единицах ETH и WEENUS (не wei!).
    const balance = await getBalance(web3, targetAddress);
    console.log(`[Task 1] balance is ${JSON.stringify(balance)}`);

    // #2 Отправьте 12wei на TARGET_ADDRESS.
    const sendEthTxHash = await sendEth(web3, targetAddress, 12);
    console.log(`[Task 2] send eth tx hash: ${sendEthTxHash}`);

    // #3 Отправьте 10wei токена WEENUS на TARGET_ADDRESS.
    const sendWeenusTxHash = await sendWeenus(web3, targetAddress, 10);
    console.log(`[Task 3] send weenus eth hash: ${sendWeenusTxHash}`);

    // #4 Задеплойте контракт-калькулятор (подробности в файле README.md) с base равным 12.
    const calculatorAddress = await deployCalculator(web3, 12);
    console.log(`[Task 4] calculator contract address: ${calculatorAddress}`);

    // #5 Вызовите метод mul контракта с числом 15.
    const calculationResult = await callMul(web3, calculatorAddress, 15);
    console.log(`[Task 5] calculator contract mul result: ${calculationResult}`);

    // #6 Измените число base на контракте на 20.
    const methodSendReceipt  = await changeBase(web3, calculatorAddress, 20);
    console.log(`[Task 6] calculator contract method send tx hash: ${methodSendReceipt?.transactionHash}`);

    // #7 Из чека последней транзакции выясните, сколько было потрачено газа.
    // Программно вычислите, сколько это единиц ETH (не wei!) взяв текущий gas price из web3.
    // Также из чека транзакции извлеките данные о произошедшем событии. Получите прошлое base из события.
    const receiptData  = await extractReceipt(web3, methodSendReceipt);
    console.log(`[Task 7] receipt data: ${JSON.stringify(receiptData)}`);
}

main();
