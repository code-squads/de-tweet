import Web3 from 'web3';
import deTweetABI from '../contracts/DeTweetABI.json';
import {
    detweetAddress,
    // contractDeploymentTx,
    // contractDeploymentTxLink
} from '../contracts/deploymentDetails'

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed !');
}

const web3 = new Web3(Web3.givenProvider);

const DeTweetContract = new web3.eth.Contract(deTweetABI, detweetAddress);

// console.log("Web3", web3);
// console.log("DeTweet contract address: ", detweetAddress);
// console.log("DeTweet contract deployment: ", contractDeploymentTxLink);
// console.log("DeTweet ABI: \n", deTweetABI);
// console.log("DeTweet contract: \n", DeTweetContract);

console.log("DeTweet contract methods:", DeTweetContract.methods);

window.DeTweetContract = DeTweetContract;
export default DeTweetContract;