## install

 ~/blockchain/poanetwork/tokenbridge-burner-wallet-plugin $ npm install

~/blockchain/poanetwork/tokenbridge-burner-wallet-plugin/my-plugin $ npm install


## build

yarn build

## XDaiGateway.js

确认里边的内容已经修改

## wallet/.env

REACT_APP_INFURA_KEY=945c07d86744491cb15c4547227b2dfa
REACT_APP_PK=

##  wallet

1. token address
   address: '0xeE7fAf1227aFb0668f339A849dcf01648f41671f' //token contract address

2. sUSDBridge.ts
// Mediator contract address at the Sokol
const homeMediatorAddress = ''
// Mediator contract at the Ethereum Kovan
const foreignMediatorAddress = ''

3. node_modules/@burner-wallet/core/gateways/XDaiGateway.js
   
   Web3.providers.HttpProvider('https://rpc.elaeth.io')

   getNetworks ===> 3


export { default as sUSD } from './assets/sUSD'
export { default as xsUSD } from './assets/xsUSD'
export { default as sUSDBridge } from './pairs/sUSDBridge'

yarn run start-wallet


## Exchange

1. [ Foreign ] Bridge Mediator: 0xFC18Acb2Fe87943d91e1a468da02C07E4406E6A2 转入1个MAIN

https://kovan.etherscan.io/address/0xfc18acb2fe87943d91e1a468da02c07e4406e6a2

https://kovan.etherscan.io/tx/0xae1a10083920936c3b777948b30ed4fa08efc7458d3a1d195e79232f46fd52f5


## ERROR


Oct 12 12:45:34 POABridge oracle_bridge_senderhome_1/9cc60edfaa84[26163]: {"level":50,"time":1602477934795,"msg":"Tx Failed for event Tx 0xae1a10083920936c3b777948b30ed4fa08efc7458d3a1d195e79232f46fd52f5. exceeds block gas limit","name":"sender-home","eventTransactionHash":"0xae1a10083920936c3b777948b30ed4fa08efc7458d3a1d195e79232f46fd52f5","error":"exceeds block gas limit","v":1}


docker stop 9cc60edfaa84

