"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import logo from "./Images/logo.png";
import etheriumTop from "./Images/etherium-top.png";
import etheriumBottom from "./Images/etherium-bottom.png";
import smallEtherium from "./Images/etherium.png";
import semiImage from "./Images/semi.png";
import eth from "./Images/eth.png";
import pipeImage from "./Images/pipe-img.png"
import bar from './Images/bar.png'

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <main className="flex min-h-screen bg-white" style={{ margin: 0 }}>
      <nav className="w-full text-white flex justify-between items-center p-9 fixed top-0 left-0 z-50" style={{ margin: 0, backgroundColor: "#1D1D1D" }} >
        <div className="flex items-center">
          <div className="mr-6">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </div>
          {["About", "Features", "Market", "Wallet", "Contact"].map((item) => (
            <div key={item} className="relative group">
              <button
                className="px-5 py-3 flex items-center"
                onClick={toggleDropdown}
              >
                {item} <AiFillCaretDown className="ml-1" />
              </button>
              {/* {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white text-black shadow-lg rounded h-[120%]">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                  </ul>
                </div>
              )} */}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button className="bg-white text-black px-6 py-3 rounded-full mr-6 text-lg">
            Join Waitlist
          </button>
          <FaTwitter className="text-white mx-3 cursor-pointer text-2xl border border-white rounded-full p-1 size-10" />
          <FaLinkedin className="text-white mx-3 cursor-pointer text-2xl border border-white rounded-full p-1 size-10" />
        </div>
      </nav>

      <div className="flex flex-1">
        <div className="w-1/2 p-24">
          <div className="w-full flex" style={{ marginTop: "20px" }}>
            <Image src={etheriumTop} alt="Ethereum Top" width={500} height={500} layout="intrinsic" />
          </div>

          <div className="w-full flex flex-col gap-2" style={{ display: "flex", flexDirection: "column" }}>
            <div className="flex items-center">
              <h1 className="text-6xl font-bold text-black">
                Your Exclusive <span className="text-yellow-500">Crypto Platform</span> Is Coming Soon!
              </h1>
              <Image src={smallEtherium} alt="Small Ethereum" width={200} height={200} className="ml-4 filter grayscale" />
            </div>
            <p className="mt-6 text-xl text-black">
              Prepare yourself for an unparalleled journey into the world of digital finance.
              LOTUS is about to revolutionize the way you think about cryptocurrency.
            </p>
            <br></br>
            <div className="mt-8 flex relative items-center">
              <input
                
                type="text"
                placeholder="Enter your email"
                className="px-4 py-4 rounded-l-full border border-gray-300 focus:outline-none w-1/2 absolute"
              />
              <button className="absolute left-80 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-5 rounded-full flex items-center z-50">
                Join the Waitlist
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-10/11 flex items-center justify-center mt-56">
          <div className="relative w-full h-full flex items-start justify-start p-4">
            <Image src={semiImage} alt="Semi Image" width={350} height={350} className="absolute top-0 left-10" />
            <Image src={eth} alt="Ethereum" width={250} height={250} className="absolute top-0 left-0" />
            <div className="absolute top-0 right-20 bg-gray-100 border-4 border-yellow-500 px-4 py-16 rounded-lg w-1/2 flex-col" style={{ "gap": "20px" }}>
              <div className="text-black text-xl mb-4">Join our elite community and be the first to experience the next level of cryptocurrency.</div>
              <div className="text-yellow-500 text-6xl font-bold mb-2">230+</div>
              <div className="text-black text-sm ">Already Joined! <b>Only a few spots left</b></div>
              <br></br>
              <Image src={bar} alt="Bar" width={500} height={500} layout="intrinsic" />
            </div>
          </div>
          <div className="absolute bottom-50 right-0 w-1/2 flex flex-col items-center space-y-2" style={{ marginBottom: '30px', paddingRight: '50px' }}>
            <Image src={pipeImage} alt="Semi Image" width={850} height={500} className="absolute top-0 left-10" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Image src={etheriumBottom} alt="Ethereum Bottom" width={500} height={500} layout="intrinsic" />
      </div>
    </main>
  );
}
