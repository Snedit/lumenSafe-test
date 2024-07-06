document.addEventListener("DOMContentLoaded", async () => {
    let web3;
    let account;
    let counterContract;

    const counterValueElement = document.getElementById("counter-value");
    const incrementBtn = document.getElementById("increment-btn");
    const decrementBtn = document.getElementById("decrement-btn");
    const resetBtn = document.getElementById("reset-btn");

    const contractAddress = "0x477650f44212aEC7A29a891903d2BcCe1711AB03"; // Replace with your contract address
    const abi = [
        {
            "inputs": [],
            "name": "decrement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "reset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "count",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }

    ];

    const initWeb3 = async () => {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
            } catch (error) {
                console.error("User denied account access");
            }
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
    };

    const initContract = () => {
        counterContract = new web3.eth.Contract(abi, contractAddress);
    };

    const initAccount = async () => {
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
    };

    const updateCounter = async () => {
        const count = await counterContract.methods.count().call();
        counterValueElement.innerText = `Counter: ${count}`;
    };

    incrementBtn.addEventListener("click", async () => {
        await counterContract.methods.increment().send({ from: account });
        updateCounter();
    });

    decrementBtn.addEventListener("click", async () => {
        await counterContract.methods.decrement().send({ from: account });
        updateCounter();
    });

    resetBtn.addEventListener("click", async () => {
        await counterContract.methods.reset().send({ from: account });
        updateCounter();
    });

    await initWeb3();
    await initAccount();
    initContract();
    updateCounter();
});

