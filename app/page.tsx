"use client";
import React from "react";
import {  Tooltip } from "antd";
import { IoCartOutline, IoReorderThreeOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { Avatar, Badge, Rate } from "antd";
import { MdArrowOutward } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white w-screen">
      <div className=" py-4 bg-white border-b border-black px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6 text-gray-700 pr-8">
            <a href="#" className="hover:text-black text-lg">
              <IoReorderThreeOutline style={{ fontSize: "1.5rem" }} />
            </a>{" "}
            <a href="#" className="hover:text-black text-lg">
              Home
            </a>
            <a href="#" className="hover:text-black text-lg">
              Shop
            </a>
          </div>

          <div className="text-xl font-semibold text-gray-800 flex justify-between items-center gap-1">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/logo.6b11191fb34a805924dc.jpg"
              alt=""
              className="w-[30px] h-[30px] rounded-full"
            />
            <span className="text-xl font-semibold text-black">CYCLE</span>
          </div>

          <div className="flex items-center space-x-4">
            <div
              style={{
                borderRadius: "50%",
                border: "0.5px solid black",
                padding: "4px",
              }}
            >
              <CiBellOn style={{ fontSize: "1.3rem", color: "#000" }} />
            </div>

            <Badge count={7}>
              <Avatar
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "3px",
                }}
                icon={<IoCartOutline />}
                shape="circle"
              />
            </Badge>

            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              size={32}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className="bg-white w-[50%] flex flex-col justify-center items-start py-8 px-12">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2">Discovering the</h1>
            <h1 className="text-5xl font-bold mb-2">Undiscovered</h1>
            <h1 className="text-5xl font-bold">Charms</h1>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            Provider in YogaKarat with a sustainable tourism concept delivering
            a meaningful journey cycling tours
          </p>
          <div className="flex items-center w-full mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full search-input px-4 py-2 border border-black rounded-full"
            />
            <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-full">
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle0-.910616741f8663106d01.jpg"
              alt=""
              className="rounded-lg w-full"
            />
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle00.ffd967078bbac4535344.jpg"
              alt=""
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex items-start justify-between w-[50%] h-[600px] px-12 ">
          <div className="w-[600px] h-[600px] border rounded-lg overflow-hidden">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/main.0ae7bc65becdfa4ac65b.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300px] flex flex-col justify-center items-start ml-8 gap-2">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle0-.910616741f8663106d01.jpg"
              alt=""
              className="rounded-lg h-133 w-200 mb-4"
            />

            <p className="text-md text-gray-600 mb-4">
              Provider in Yogakarat with <br /> a meaningful journey <br />{" "}
              through cycling tours
            </p>

            <button className="border-2 px-4 py-1 mt-1 border-gray-800 rounded-lg">
              Explore more
            </button>

            <h3 className="text-2xl font-bold mt-4">4.9</h3>
            <p className="text-md mb-2">Our customer rating</p>
            <Rate disabled defaultValue={5} />
            <Avatar.Group size="large">
              <Tooltip title=" Michonne" placement="top">
                {" "}
                <Avatar src="https://randomuser.me/api/portraits/women/50.jpg" />
              </Tooltip>
              <Tooltip title="James" placement="top">
                {" "}
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
              </Tooltip>{" "}
              <Tooltip title=" Emily" placement="top">
                <Avatar src="https://randomuser.me/api/portraits/women/52.jpg" />
              </Tooltip>{" "}
              <Tooltip title=" Peter" placement="top">
                <Avatar src="https://randomuser.me/api/portraits/men/53.jpg" />
              </Tooltip>{" "}
              <Tooltip title=" Ziya" placement="top">
                <Avatar src="https://randomuser.me/api/portraits/women/54.jpg" />
              </Tooltip>
            </Avatar.Group>
            <p className="text-md text-gray-600 mb-4">
              Provider in Yogakarta with <br />a meaningful journey
            </p>
            <button className="border-2 px-4 py-1 mt-1 border-gray-800 rounded-lg">
              Explore more
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black w-screen h-[450px] flex-col justify-center items-center mt-5">
        <div className="mt-10">
          <div className="flex justify-center items-center text-center ">
            {" "}
            <h1 className="text-5xl font-bold mt-8  text-white">
              Ride Your Cycle to Heaven With Us
            </h1>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-lg w-48">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">1</h2>
                <MdArrowOutward />
              </div>
              <p className="mt-2">
                The cycle routes quiz volutes sit aspirator aut fugit
              </p>
              <img
                src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle1.a6df4f5bba58e85525df.jpg"
                alt="Card 1 Image"
                className="mt-4 w-full rounded-lg"
              />
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow-lg w-48">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">1</h2>
                <MdArrowOutward />
              </div>
              <p className="mt-2">
                The cycle routes quiz volutes sit aspirator aut fugit
              </p>
              <img
                src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle2.091a6119b051c0257dc8.jpg"
                alt="Card 1 Image"
                className="mt-4 w-full rounded-lg"
              />
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow-lg w-48">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">1</h2>
                <MdArrowOutward />
              </div>
              <p className="mt-2">
                The cycle routes quiz volutes sit aspirator aut fugit
              </p>
              <img
                src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle2.091a6119b051c0257dc8.jpg"
                alt="Card 1 Image"
                className="mt-4 w-full rounded-lg"
              />
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow-lg w-48">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">1</h2>
                <MdArrowOutward />
              </div>
              <p className="mt-2">
                The cycle routes quiz volutes sit aspirator aut fugit
              </p>
              <img
                src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle1.a6df4f5bba58e85525df.jpg"
                alt="Card 1 Image"
                className="mt-4 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen  h-[600px] flex items- justify-center px-12 mt-6">
        <div className=" w-1/4 flex items-center justify-center overflow-hidden">
          <img
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/main.0ae7bc65becdfa4ac65b.jpg"
            alt=""
            className="w-[300px] h-[450px] object-cover rounded-[25%]"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <div className="flex items-center p-4">
            <p className="text-sm">
              Which means that your heart, diaphragm, and lungs all perspire and
              experience <br /> increased
            </p>
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet3.bc7070eb9cba4d0a45ab.jpg"
              alt=""
              className="rounded-full w-[200px] h-[200px] ml-4"
            />
          </div>
          <div className="flex flex-col pl-4 ">
            <p className="text-4xl font-bold mb-2">Make Everyday</p>
            <p className="text-4xl font-bold mb-2">Extra Ordinary</p>
            <p className="text-4xl font-bold mb-2">Journey</p>
          </div>
          <div className="p-4">
            <p className="text-sm">
              Our Bikes are strength you can drive daily. Take a penny to work,
              to be the gym for a meetup with friends, you will be rolling in
              style.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center items-center h-screen w-screen p-2 ">
        <div className="text-6xl font-semibold mb-8 flex justify-center mt-16">
          Our Best Products
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet1.0e1ca5cbcff8729abb57.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$29.9</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet2.d72e491268eecefd6eb6.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$50.9</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet3.bc7070eb9cba4d0a45ab.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$60.9</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet4.3cf5d929057fa551aa3b.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$29.9</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet4.3cf5d929057fa551aa3b.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$29.9</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://dreamy-stardust-95cd55.netlify.app/static/media/helmet5.45a9573d1413768f39a6.jpg"
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              className="mb-2"
            />
            <p className="text-center">Poc Cycling helmet</p>
            <p>$28.9</p>
          </div>
        </div>
      </div>

      <div className="bg-black w-screen h-[530px] flex flex-col justify-center items-center mt-6">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-white">
            Ride Bike to the Heaven With Us
          </h1>
        </div>
        <div className="p-4 rounded-lg shadow-lg flex justify-center items-center gap-4">
          <img
            className="w-[200px] h-[400px]"
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle-p.7fb03b08412cfcb61f03.jpg"
            alt=""
          />
          <img
            className="w-[200px] h-[400px]"
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle-p1.e09396cda122ef0e41b3.jpg"
            alt=""
          />
          <img
            className="w-[200px] h-[400px]"
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle-p.7fb03b08412cfcb61f03.jpg"
            alt=""
          />
          <img
            className="w-[200px] h-[400px]"
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle-p1.e09396cda122ef0e41b3.jpg"
            alt=""
          />
          <img
            className="w-[200px] h-[400px]"
            src="https://dreamy-stardust-95cd55.netlify.app/static/media/cycle-p.7fb03b08412cfcb61f03.jpg"
            alt=""
          />
        </div>
      </div>

      <footer className=" py-12">
        <div className="container mx-auto flex flex-wrap justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black text-lg font-semibold mb-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Suppliers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black text-lg font-semibold mb-4"
                >
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Super Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Feedback
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black text-lg font-semibold mb-4"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Terms And Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4">
              Tranch You Later, Innovator
            </h4>
            <form className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-black text-white px-6 py-2 rounded-full">
                Search
              </button>
            </form>

            <div className="flex justify-start items-center mt-4 space-x-4">
              <a href="#" className="text-gray-700 hover:text-black">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          © 2024 Hussein. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
