


curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"to":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","data":"0xa9059cbb0000000000000000000000007cb57b5a97eabe94205c07890be4c1ad31e486a80000000000000000000000000000000000000000000000000000000000000001"}],"id":34}' https://rpc.elaeth.io

{"jsonrpc":"2.0","id":34,"result":"0x5958"}



curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x50Fe4aE09765962Dd7d9AF89e640277e34BC1743", "latest"],"id":1}' https://rpc.elaeth.io


curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x9d319fa2a54258b7f0d165a6342475a08de8c7d5eb8e7f65678941c44ac74044"],"id":1}' https://rpc.elaeth.io


curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xbd3ef3ae6d944ee9bef9fd5e4bb9a3f3ab5f7a2711421a39dc568cb9235c0b0a"],"id":1}' https://rpc.elaeth.io




{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "blockHash":null,
        "blockNumber":null,
        "from":"0x4456d699fb0b98350a910b912c6fa035148b1b6f", //validator
        "gas":"0x7a1200",
        "gasPrice":"0x3b9aca00",
        "hash":"0x9d319fa2a54258b7f0d165a6342475a08de8c7d5eb8e7f65678941c44ac74044",
        "input":"0xe7a2c01f00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000095000500004a1e9d9fe4f73c52779695d6019be8cabecc05770000000000000001fc18acb2fe87943d91e1a468da02c07e4406e6a23f9ffaf637902a773ce4e97ffba865d5024365d4007a12000101002a038b6c035400000000000000000000000050fe4ae09765962dd7d9af89e640277e34bc17430000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000",
        "nonce":"0x85",
        "to":"0x00c9b5aee5bd244b3e7233b5d9f18c589ac2635f", //HomeBridge: 0x00C9B5AEe5Bd244B3E7233b5D9f18C589Ac2635F
        "transactionIndex":null,
        "value":"0x0",
        "v":"0x29",
        "r":"0x6d15f2b48fab2fc3a4e76e55e578a853c01a0c8fba61cc6f5c539b8c2a4f2d6a",
        "s":"0x729f7a591eb6c4cf1204628485ae09d4eaabc085ebd1acb4418f1f0aa953dded"
    }
}


## 使用RPC查询制定地址中的Token余额
https://blog.csdn.net/wypeng2010/article/details/81362562

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{
  "from": "0x50Fe4aE09765962Dd7d9AF89e640277e34BC1743",
  "to": "0x41c16473b12211892c813f52815f700440471aa0",
  "data": "0x70a0823100000000000000000000000050Fe4aE09765962Dd7d9AF89e640277e34BC1743"
},"latest"],"id":1}' https://kovan.infura.io/v3/945c07d86744491cb15c4547227b2dfa


Bridge Mediator: 0xFC18Acb2Fe87943d91e1a468da02C07E4406E6A2
0xFC18Acb2Fe87943d91e1a468da02C07E4406E6A2

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{
  "from": "0xFC18Acb2Fe87943d91e1a468da02C07E4406E6A2",
  "to": "0x41c16473b12211892c813f52815f700440471aa0",
  "data": "0x70a08231000000000000000000000000FC18Acb2Fe87943d91e1a468da02C07E4406E6A2"
},"latest"],"id":1}' https://kovan.infura.io/v3/945c07d86744491cb15c4547227b2dfa


{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000006124fee993bc0000"}

## ELA

curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{
  "from": "0x50Fe4aE09765962Dd7d9AF89e640277e34BC1743",
  "to": "0xCa2fCE52FD31e0ddF8Ad4D3c3b2c510A512F591e",
  "data": "0x70a0823100000000000000000000000050Fe4aE09765962Dd7d9AF89e640277e34BC1743"
},"latest"],"id":1}' https://rpc.elaeth.io

{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000000000000000000000"}


[   Home  ] Bridge Mediator: 0x3F9ffAF637902a773Ce4e97FFbA865d5024365D4

curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{
  "from": "0x3F9ffAF637902a773Ce4e97FFbA865d5024365D4",
  "to": "0xCa2fCE52FD31e0ddF8Ad4D3c3b2c510A512F591e",
  "data": "0x70a082310000000000000000000000003F9ffAF637902a773Ce4e97FFbA865d5024365D4"
},"latest"],"id":1}' https://rpc.elaeth.io

{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000000000000000000000"}
