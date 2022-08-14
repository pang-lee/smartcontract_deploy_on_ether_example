const VendingMachine = artifacts.require("VendingMachine")

contract("VendingMachine", (accounts => {
    before(async() => {
        instance = await VendingMachine.deployed()
    })

    it('balance 100', async() => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, 'should be 100')
    })

    it('ensure balance of vneding maching can be updated', async() => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 200, 'should be 200')
    })

    it('allow donut', async() => {
        await instance.purchase(1, { from: accounts[0], value: web3.utils.toWei('3', 'ether') })
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 199, 'should be 199')
    })


}))