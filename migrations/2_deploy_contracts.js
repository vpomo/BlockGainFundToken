const BGFCrowdsale = artifacts.require('./BGFCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0xBd74ffF89D7823fe5346A154C0170730aa106BE2";

    deployer.deploy(BGFCrowdsale, owner);

};
