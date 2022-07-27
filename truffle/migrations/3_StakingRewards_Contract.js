var StakingRewards = artifacts.require("./StakingRewards.sol");

module.exports = function(deployer) {
  deployer.deploy(StakingRewards);
};