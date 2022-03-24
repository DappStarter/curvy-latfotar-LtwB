require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strategy cost spice social inner argue metal gaze'; 
let testAccounts = [
"0x78d0ee70c295f8eae1ba9109582192d256bd71c7bbc88b147bde30634b4e4a83",
"0xdfa0ae74fc5e97c50e3a8e4d4215faea684830297b991d9618438927601c2974",
"0xc053f9dfa2221a09fd5e8d27e2158575c92755dbbcf64e719c1e61d8737bf983",
"0x374d5f1c75781e55b51c05cd88a506baa391387cd9ada084e1362ca44df07c14",
"0xf60d8edd5bd186d530d1769bc0ea1ab5134dcb7dc7448f4cbad92dfe5684739a",
"0x1caada15cedca4b6324a1df4305d9e28943c5327b3d29f1cba52f18903f9dcdc",
"0xa053ccb026c2edc7cf552a00a1c90d7148c1b184a25df5fbc90a63be42e01624",
"0x60fae870e2b92a3fa843045ecff0064d57782ce8cc4cc022bac32249c406d466",
"0xfe43def5a5317fa6ea8bb440a19df687f0eba72655aa00a6dd295f2c4f601a51",
"0x914c64405e140b7cc8388dde75eb70d1e19278c10deb6e608f3cc09b8046bd0e"
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

