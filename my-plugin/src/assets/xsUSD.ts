import { ERC677Asset } from '@poanet/tokenbridge-bw-exchange'

// import { ERC677Asset } from '@poanet/tokenbridge-bw-exchange'

export default new ERC677Asset({
  id: 'xsusd', //internal id of the asset
  name: 'Main on Elaeth', //displayed name of the asset
  network: '3', //chain id (elaeth)
  address: '0xCa2fCE52FD31e0ddF8Ad4D3c3b2c510A512F591e' //token contract address
})

//Chain Id OR network Id 不一致的苦恼啊