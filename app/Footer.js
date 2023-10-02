import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-[35vh] w-full flex md:flex-row flex-col justify-around items-start p-20 ">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Jatin<span className="text-blue-600">Kumar</span>
						</p>
						<div className="flex gap-6 pb-5">
                            <Link href= "https://www.instagram.com/jatinkumar_2005/" target="_blank">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                            </Link>
							<Link href ="">
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            </Link>
							<Link href="https://www.linkedin.com/in/jatin-kumar-a68664252" target="_blank">
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            </Link>
							<Link href="">
                            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                            </Link>
							
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Find Us</p>	
                        <li>Dhanrajgiri-2 Hostel</li>
                        <li>IIT BHU Varanasi</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
                        <li>8950984468</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Mail Us</p>
                        <li>jatin.kumar.civ22@itbhu.ac.in</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2023-2024 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Jatin Kumar{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;