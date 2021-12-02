require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remember history grid kiwi suit topic'; 
let testAccounts = [
"0x3be4d04cbd43c541bb73be9e9d5b3c7a995f0f9edd8763d9fec6e2ea793a573c",
"0x4cee71ebe85b5515b2728868bfc01af50afe491891f4b33a6191e2e1095becf4",
"0x66d9a40f0f397f4e0e98b8dbaa320fb3863abc73bc102f597996a89225c061b3",
"0xcfb778233e802295f204deb6e23008099a688779126cce3ec8a312411afd2ed4",
"0xdff1ce2ee6a773f2bea2dacc065549ca42385900a0b68abe8845fb8d660ba648",
"0xe51c2e16f979ef0670395852da4eb81e963bee3b7af2287600db66f189250a55",
"0xd57210d0546d3e75643a0990bedb3cdfa4fc436aa5a0bb7db4f08f0cd02cf07c",
"0x9ffbaa9e87d5c62a6d3d7c5b570d543e7fa5ff835de3f9e4d9aa2824176e15bb",
"0x151186f84ffda5557f536be8c4759a77211b7a77247def0f91be0c2e37d5b085",
"0xe6fe0e48a0efe1ed630056a451f65330e0e91cc12e27cd677144e41201c5628a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

