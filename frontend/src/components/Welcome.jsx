import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum, SiPolygon, SiSolidity } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
// import { Loader } from './';

let y = false;
const Welcome = ({ setX }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
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
    <div className='px-14 py-1'>
      <div className="flex mf:flex-row flex-col justify-between items-center md:p-10 py-2 px-1">
        <div className="flex flex-1 items-start flex-col mf:mr-10">
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            SEND - C R Y P T O <br /> ACROSS THE WORLD
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error eligendi sapiente. Voluptatem quae nesciunt repellendus labore, libero ipsum consectetur, magnam cumque accusantium commodi expedita odio nisi necessitatibus delectus reiciendis!
          </p>
          {!y ?
            <button type='button' onClick={connectWallet} className='flex flex-1 flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-cyan-800'>
              <p className="text-white text-base font-semibold px-20">CONNECT to METAMASK WALLET</p>
            </button>
            : (
              <button type='button' onClick={connectWallet} className='hidden'>
                <p className="text-white text-base font-semibold px-20">CONNECT to METAMASK WALLET</p>
              </button>
            )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full h-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-full border-2 border-white flex justify-center items-center">
                  <SiPolygon fontSize={35} color="#fff" />
                </div>
                <BsInfoCircle fontSize={25} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-xl">
                  {account ? `Connected account: ${account}` : "Account address of user from Metamask by Sayan"}
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-white font-semibold text-2xl mt-3 mb-1 flex justify-center items-center">
                    Metamask Wallet
                  </div>
                  <SiSolidity fontSize={30} color='#fff ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;