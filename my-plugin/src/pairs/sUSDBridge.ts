import { Mediator } from '@poanet/tokenbridge-bw-exchange'
import { Stake, xStake } from '../index'
import BN from 'bn.js'
import { EstimateReturn, ValueTypes } from '@burner-wallet/exchange'
import HomeStakeMediatorAbi from '../abis/HomeStakeMediatorAbi'
import { fromWei, toBN } from 'web3-utils'
import { sUSD, xsUSD } from '../index'

// kosol
// // Mediator contract address at the Sokol
// const homeMediatorAddress = '0x5b0d153ED6404a02C885EBE864C21C22996e289D'
// // Mediator contract at the Ethereum Kovan
// const foreignMediatorAddress = '0x67Fe43faDf03aC43C48B9743Ba691Cc40839132e'

// ela
// Mediator contract address at the Sokol
const homeMediatorAddress = '0x7C8419cD3C7487408F6c545f7422d7d9E6e7e725'
// Mediator contract at the Ethereum Kovan
const foreignMediatorAddress = '0xd267C0Ff3ff12622c8470E05b61a724201536c73'

export default class StakeBridge extends Mediator {
  constructor() {
    super({
      assetA: sUSD.id,
      assetABridge: foreignMediatorAddress,
      assetB: xsUSD.id,
      assetBBridge: homeMediatorAddress
    })
  }

  async estimateAtoB(value: ValueTypes): Promise<EstimateReturn> {
    console.log('StakeBridge estimateAtoB ===> ')
    const web3 = this.getExchange()
      .getAsset(this.assetA)
      .getWeb3()

    const userAmount = this._getValue(value)
    const contract = new web3.eth.Contract(HomeStakeMediatorAbi, this.assetABridge)
    const { feeAmount, feePercentage } = await this.getFee(web3, contract, userAmount)
    const finalAmount = toBN(userAmount).sub(feeAmount)
    const estimateInfo = feeAmount.isZero()
      ? null
      : `Estimation takes fee charges into consideration. Fee: ${feePercentage}%`

    return {
      estimate: finalAmount.toString(),
      estimateInfo
    }
  }

  async estimateBtoA(value: ValueTypes): Promise<EstimateReturn> {
    console.log('StakeBridge estimateBtoA ===> ')
    return {
      estimate: this._getValue(value),
      estimateInfo: null
    }
  }

  async getFee(web3: any, contract: any, value: any): Promise<{ feeAmount: BN; feePercentage: number }> {
    const fee = toBN(await contract.methods.getFee().call())
    const feePercentage = Number(fromWei(fee, 'ether')) * 100
    const feeAmount = toBN(await contract.methods.calculateFee(value).call())
    return {
      feeAmount,
      feePercentage
    }
  }
}
