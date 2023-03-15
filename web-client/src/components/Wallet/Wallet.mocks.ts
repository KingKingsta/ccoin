import { IWallet } from './Wallet'

const base: IWallet = {
    address: '0x0BA...5Bb9',
    balanceInWei: 1000000,
}

// const ethereum: INetwork = {
//     id: [1, 'ethereum'],
//     name: 'Ethereum',
//     cryptoCode: 'ETH',
//     image: '/eth_logo.svg',
//     address: '0x0BA...5Bb9',
//     testNetworks: ['Goerli', 'Sepolia', 'Rinkeby'],
//     fiatCode: 'USD',
//     tokenBalance: 5.3,
//     fiatBalance: 8602.64,
//     tokenValue: 1624.47,
// }
// const bitcoin: INetwork = {
//     id: [2, 'bitcoin'],
//     name: 'Bitcoin',
//     cryptoCode: 'BTC',
//     image: '/bitcoin_icon.png',
//     address: '0x0BA...5Bb9',
//     testNetworks: ['BTC 1', 'BTC 2', 'BTC 3'],
//     fiatCode: 'USD',
//     tokenBalance: 5.3,
//     fiatBalance: 8602.64,
//     tokenValue: 23302.4,
// }
// const pax_gold: INetwork = {
//     id: [3, 'pax_gold'],
//     name: 'Pax Gold',
//     cryptoCode: 'GLD',
//     image: '/pax_gold.png',
//     address: '0x0BA...5Bb9',
//     testNetworks: ['GLD 1', 'GLD 2', 'GLD 3'],
//     fiatCode: 'USD',
//     tokenBalance: 5.3,
//     fiatBalance: 8602.64,
//     tokenValue: 1819.35,
// }
// const bnb: INetwork = {
//     id: [4, 'bnb'],
//     name: 'BNB',
//     cryptoCode: 'BNB',
//     image: '/bnb_icon.png',
//     address: '0x0BA...5Bb9',
//     testNetworks: ['BNB 1', 'BNB 2', 'BNB 3'],
//     fiatCode: 'USD',
//     tokenBalance: 5.3,
//     fiatBalance: 8602.64,
//     tokenValue: 297.39,
// }
// const polygon: INetwork = {
//     id: [5, 'polygon'],
//     name: 'Polygon',
//     cryptoCode: 'MATIC',
//     image: '/matic-token.png',
//     address: '0x0BA...5Bb9',
//     testNetworks: ['Maker 1', 'Maker 2', 'Maker 3'],
//     fiatCode: 'USD',
//     tokenBalance: 5.3,
//     fiatBalance: 8602.64,
//     tokenValue: 1.2,
// }

export const mockWalletProps = {
    base,
    // ethereum,
    // bitcoin,
    // pax_gold,
    // bnb,
    // polygon,
}
