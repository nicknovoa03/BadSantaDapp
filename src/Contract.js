import Web3 from "web3";
import badSanta from "./contracts/BadSantas.json"


const contractAddr = "0x2a3656B1E4142015901cba48052B67E486c6E39E";
const web3 = new Web3("https://mainnet.infura.io/v3/bad8cc770bef49dc88683bf2290205c8");
let contract = new web3.eth.Contract(badSanta.abi, contractAddr);

export { 
    contractAddr, 
    contract
};