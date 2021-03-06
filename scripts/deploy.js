const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['Leo', 'Aang', 'Pikachu'], // Names
    [
      'QmVx79jpJTCvh9B8M6ZNucB4ehxLJyZVNsVqSfrwLwSKCG',
      'QmetNRFG8t55zndy9WDBZfLcW37FGSQYELYAt3poiRWTbL',
      'QmRippRQfe5zwRwudtwEy1YjXYpnQ1pt7dKXNcfu66moUS',
    ], // Images
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    'Elon Musk', // Boss name
    'https://i.imgur.com/AksR0tt.png', // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  )
  await gameContract.deployed()

  console.log('contract deployed to: ', gameContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
