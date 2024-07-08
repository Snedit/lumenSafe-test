import React, { useState, useEffect } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import Backup from "./Backup";
import Web3 from 'web3';

// Import ABI and contract address constants
//import { contractABI, contractAddress } from '../utils/contractConstants';  // Adjust the path as per your project structure

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = ({ x, account }) => {
  const [backups, setBackups] = useState([]);
  const [loadingBackups, setLoadingBackups] = useState(false);
  const [web3, setWeb3] = useState(null); // State to hold web3 instance

  useEffect(() => {
    if (x && account) {
      initializeWeb3();
    }
  }, [x, account]);

  const initializeWeb3 = async () => {
    if (!window.ethereum) {
      console.error('MetaMask not detected');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } catch (error) {
      console.error('Error initializing web3', error);
    }
  };

  const fetchBackups = async (userAddress) => {
    if (!web3) {
      console.error('Web3 not initialized');
      return;
    }

    try {
      setLoadingBackups(true);

      const contractAddress = '0x0bC497a90F7162DF42978B7c3a6014083393680E';
      const contractABI = [
          {
              "inputs": [
                  {
                      "internalType": "string",
                      "name": "cid",
                      "type": "string"
                  }
              ],
              "name": "addBackup",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "anonymous": false,
              "inputs": [
                  {
                      "indexed": true,
                      "internalType": "address",
                      "name": "user",
                      "type": "address"
                  },
                  {
                      "indexed": false,
                      "internalType": "string",
                      "name": "cid",
                      "type": "string"
                  },
                  {
                      "indexed": false,
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                  }
              ],
              "name": "BackupAdded",
              "type": "event"
          },
          {
              "inputs": [
                  {
                      "internalType": "address",
                      "name": "user",
                      "type": "address"
                  }
              ],
              "name": "getBackups",
              "outputs": [
                  {
                      "components": [
                          {
                              "internalType": "uint256",
                              "name": "timestamp",
                              "type": "uint256"
                          },
                          {
                              "internalType": "string",
                              "name": "cid",
                              "type": "string"
                          }
                      ],
                      "internalType": "struct BackupStorage.Backup[]",
                      "name": "",
                      "type": "tuple[]"
                  }
              ],
              "stateMutability": "view",
              "type": "function"
          }
      ];


      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const backups = await contract.methods.getBackups(userAddress).call();
      setBackups(backups);
      setLoadingBackups(false);
    } catch (error) {
      console.error('Error fetching backups', error);
      setLoadingBackups(false);
    }
  };

  useEffect(() => {
    if (web3 && account) {
      fetchBackups(account);
    }
  }, [web3, account]);

  return (
    <div>
      {x ? (
        <Backup account={account} backups={backups} loading={loadingBackups} />
      ) : (
        <div className="flex w-full justify-center items-center gradient-bg-services pb-4">
          <div className="flex mf:flex-row flex-col items-center justify-between py-2 px-24">
            <div className="flex-1 flex flex-col justify-start items-start">
              <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                Services that we
                <br />
                continue to improve
              </h1>
              <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                The best choice for buying and selling your crypto assets, with the
                various super friendly services we offer
              </p>
              <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                Connected account: {account ? account : "No account connected"}
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
              <ServiceCard
                color="bg-[#2952E3]"
                title="Security guarantee"
                icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
              />
              <ServiceCard
                color="bg-[#8945F8]"
                title="Best Backup rates"
                icon={<BiSearchAlt fontSize={21} className="text-white" />}
                subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
              />
              <ServiceCard
                color="bg-[#F84550]"
                title="Fastest transactions"
                icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
