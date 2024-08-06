import React, { useState } from "react";
import { SiPolygon, SiSolidity } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

let y = false;

const Welcome = ({ setX, setAccount }) => {
  const [localAccount, setLocalAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setLocalAccount(accounts[0]);
        setAccount(accounts[0]);
        setX(true);
        y = true;
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      console.log("MetaMask not detected");
    }
  };

  return (
    <div className="px-14 py-1">
      <div className="flex mf:flex-row flex-col justify-between items-center md:p-10 py-2 px-1">
        <div className="flex flex-1 items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Secure Your Files <br /> With Our Web3 CI/CD
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Never lose your code! Our npm package automatically backs up your
            GitHub files to Lighthouse as a zip archive. Just install and your
            code is securely stored, ready for recovery anytime.
          </p>
          {!y ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-1 flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-cyan-800"
            >
              <p className="text-white text-base font-semibold px-20">
                CONNECT to METAMASK WALLET
              </p>
            </button>
          ) : (
            <button type="button" onClick={connectWallet} className="hidden">
              <p className="text-white text-base font-semibold px-20">
                CONNECT to METAMASK WALLET
              </p>
            </button>
          )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full h-full mf:mt-0 mt-10 full-card">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-full border-2 border-white flex justify-center items-center">
                  <SiPolygon fontSize={35} color="#fff" />
                </div>
                <BsInfoCircle fontSize={25} color="#fff" />
              </div>
              <div>
                <p className="text-white metamask-text font-light text-xl">
                  {localAccount
                    ? `Connected account: ${localAccount}`
                    : "Account address of user from Metamask"}
                </p>
                <div className="flex justify-between items-end">
                  <div className="metamask-text text-white font-semibold text-2xl mt-3 mb-1 flex justify-center items-center">
                    Metamask Wallet
                  </div>
                  <SiSolidity fontSize={30} color="#fff " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
