
console.log("Script running!");

import contractInterface from "../contract/build/contracts/HelloWorld.json";

var web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xbF7d6767d06021517650124234BdEC19C2507de6";


web3.eth.requestAccounts()
	.then((result) => {
		console.log(result);

		document.getElementById("readbutton").onclick = () => {
			const helloworld = new web3.eth.Contract(contractInterface.abi, contractAddress);
			
			helloworld.methods.greet().call()
				.then((result) => {
					document.getElementById("greeting").textContent = result;
				})
		}

		document.getElementById("writebutton").onclick = () => {
			const helloworld = new web3.eth.Contract(contractInterface.abi, contractAddress);

			helloworld.methods.setWhat("hello saturn").send({from: result[0]})
				.then((result) => {
					console.log(result);
				})
		};
	});

