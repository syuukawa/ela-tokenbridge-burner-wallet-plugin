import { ERC677Asset } from '@poanet/tokenbridge-bw-exchange'

// import { ERC677Asset } from '@poanet/tokenbridge-bw-exchange'

// export default new ERC677Asset({
//   id: 'xsusd', //internal id of the asset
//   name: 'Main on sokol', //displayed name of the asset
//   network: '77', //chain id (elaeth)
//   address: '0xeE7fAf1227aFb0668f339A849dcf01648f41671f' //token contract address
// })

export default new ERC677Asset({
  id: 'xsusd', //internal id of the asset
  name: 'Main on ela', //displayed name of the asset
  network: '21', //chain id (elaeth)
  address: '0xE3eB44F609Af7dEa9CAA1dF28BbA9032f603aC55' //token contract address
})

//Chain Id OR network Id 不一致的苦恼啊
