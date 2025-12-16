import React, { useEffect } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiPreact } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiFastapi } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { SiWireshark } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FcLandscape } from "react-icons/fc";
import { FcFilm } from "react-icons/fc";
import { FaRocket } from "react-icons/fa";
import { ImCool2 } from "react-icons/im";
import { ImGrin2 } from "react-icons/im";
import { ImHipster2 } from "react-icons/im";
import { ImPacman } from "react-icons/im";
import Profile from '../../../assets/landingPage/profile.png';
import P01 from '../../../assets/landingPage/P01.jpeg';

const LandingPage = () => {

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <>
                <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen lg:overflow-hidden bg-[#1E0044] lg:px-30 px-5 selection:bg-[#E2A6FF]">

                    <div className="fixed inset-0 pointer-events-none circle-hover z-0"></div>

                    {/* LEFT FIXED SIDEBAR */}
                    <div className="lg:col-span-2  lg:sticky lg:top-0 lg:h-screen flex flex-col lg:mt-20 mt-5">
                        <img src={Profile} alt="Profile" className="w-[250px]" />
                        <h2 className="font-ibmmono font-extrabold text-[40px] text-[#a263f2] leading-none mt-5">Chalitha Aluwihare</h2>
                        <p className="font-ibmmono font-semibold leading-tight text-sm text-[#dcdcdc] mt-2">
                            Aspiring Cybersecurity Engineer
                        </p>
                        <p className="font-ibmmono font-semibold leading-tight text-sm text-[#dcdcdc] mt-2">
                            IT(Hons) Undergraduate
                        </p>
                        <div className="flex items-center mt-3 gap-3">

                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                About Me
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>

                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Journay
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Projects
                            </p>
                        </div>
                        <div className="flex items-center mt-3 gap-3">

                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Resume Downlaod
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>

                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Contact
                            </p>

                        </div>


                        <div className='flex items-center gap-3 text-[#dcdcdc] mt-6'>
                            <FaFacebook size={25} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                            <IoLogoYoutube size={25} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />

                            <FaLinkedin size={25} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                            <FaGithub size={25} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                        </div>
                    </div>

                    {/* RIGHT SCROLLABLE CONTENT */}



                    <div className="lg:col-span-3 lg:h-screen lg:overflow-y-auto no-scrollbar  text-[#dcdcdc] lg:mt-10 mt-5">
                        <div className="flex items-center mt-6 gap-3 mb-5">
                            {/*<ImPacman color="#a263f2" size={25} className="text-white" />*/}
                            <h1 className="font-ibmmono font-bold text-xl text-[#a263f2]">Protecting Systems Preventing Trust</h1>
                        </div>
                        <p className="font-ibmmono font-light mb-6 text-sm ml-3">
                            <a href="https://www.example.com/cybersecurity" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                Aspiring Cybersecurity Engineer
                            </a> |
                            <a href="https://www.uwu.ac.lk/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                BICT(Hons) Undergraduate at Uva Wellassa University
                            </a>. Passionate about
                            <a href="https://www.kali.org/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                ethical hacking
                            </a>,
                            <a href="https://www.cisco.com/c/en/us/products/security/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                network security
                            </a>, and protecting systems. Learning tools for
                            <a href="https://www.offensive-security.com/pwk-oscp/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                penetration testing
                            </a>,
                            <a href="https://www.linux.org/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                Linux
                            </a>, and
                            <a href="https://owasp.org/" target="_blank" className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                                secure software development
                            </a>. Open to internships and hands-on cybersecurity projects.
                        </p>





                        <hr className="border mt-13 opacity-20" />

                        <div className="flex items-center mt-6 gap-3 mb-5">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">Technical Expertise</h1>
                        </div>
                        {/* Skills Section I */}
                        <div className=" lg:flex items-center gap-3 text-[#dcdcdc] mt-6">
                            {/* Programming Languages Section */}
                            <div className="my-2 p-4 rounded-xl border border-white/20 
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                <div className="">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Programming Languages
                                    </h3>
                                    <div className="ml-3 flex items-center gap-3 text-[#dcdcdc] mt-4 ">
                                        <FaPython size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                        <FaJava size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                        <IoLogoJavascript size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />

                                    </div>
                                </div>


                            </div>
                            {/* Frontend Technologies Section */}
                            <div className="my-3 p-4 rounded-xl border border-white/20 
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 hover:text-[#E2A6FF] transition-all duration-300 cursor-pointer">

                                <div className="">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Frontend Technologies
                                    </h3>
                                    <div className="ml-3 flex items-center gap-3 text-[#dcdcdc] mt-4 ">

                                        <FaHtml5 className="text-white hover:text-[#E2A6FF] transition-colors duration-300" size={35} />
                                        <SiCss3 className="text-white hover:text-[#E2A6FF] transition-colors duration-300" size={35} />
                                        <RiTailwindCssFill className="text-white hover:text-[#E2A6FF] transition-colors duration-300" size={35} />
                                        <FaFlutter size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                        <IoLogoFigma className="text-white hover:text-[#E2A6FF] transition-colors duration-300" size={35} />
                                    </div>
                                </div>


                            </div>




                        </div>
                        {/* Skills Section II */}
                        <div className=" lg:flex items-center gap-3 text-[#dcdcdc] ">
                            {/* Backend & APIs Section */}
                            <div className="my-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                <div className="">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Backend & APIs
                                    </h3>
                                    <div className="ml-3 flex items-center gap-3 text-[#dcdcdc] mt-4">
                                        <IoLogoNodejs size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                        <SiFastapi size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />

                                    </div>
                                </div>


                            </div>
                            {/* Databases Section */}
                            <div className="my-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                <div className="">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Databases
                                    </h3>
                                    <div className="ml-3 flex items-center gap-3 text-[#dcdcdc] mt-4 ">

                                        <SiMongodb size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                        <BiLogoPostgresql size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                    </div>
                                </div>


                            </div>

                            {/* Networking Section */}
                            <div className="my-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                <div className="">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Networking
                                    </h3>
                                    <div className="ml-3 flex items-center gap-3 text-[#dcdcdc] mt-4 ">

                                        <SiWireshark size={35} className="text-white hover:text-[#E2A6FF] transition-colors duration-300" />
                                    </div>
                                </div>


                            </div>




                        </div>

                        <hr className="border mt-5 opacity-20" />


                        <div className="flex items-center mt-6 gap-3 mb-7">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">Cybersecurity & Technical Certifications</h1>
                        </div>
                        {/* Cetification Section */}
                        <div className="mt-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="">
                                <h3 className="font-ibmmono font-semibold text-white text-lg">
                                    ISC2 CC Exam
                                </h3>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    International certification focusing on cybersecurity principles, ethical hacking, and security management.
                                </p>

                                <div className="flex gap-3 flex-wrap mt-3">
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Network Security
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Risk Management
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Ethical Hacking
                                    </button>
                                </div>

                            </div>


                        </div>

                        <div className="mt-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="">
                                <h3 className="font-ibmmono font-semibold text-white text-lg">
                                    ISC2 CC Exam
                                </h3>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    International certification focusing on cybersecurity principles, ethical hacking, and security management.
                                </p>

                                <div className="flex gap-3 flex-wrap mt-3">
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Network Security
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Risk Management
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                        Ethical Hacking
                                    </button>
                                </div>

                            </div>


                        </div>

                        <hr className="border mt-13 opacity-20" />
                        <div className="flex items-center mt-6 gap-3">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">My Technology & Cybersecurity Journey</h1>
                        </div>
                        {/* my journy */}
                        <div className="mt-8 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">01. 2022 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Graphic Design & Entrepreneurship
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I learned Adobe Photoshop and started my own flyer design business.
                                        I served 100+ clients, including well-known professionals, delivering
                                        creative and high-quality marketing designs.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Adobe Photoshop
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Flyer Design
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Client Communication
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Business Handling & Freelancing
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">02. 2023 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        UI/UX Design with Figma
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I learned Figma and moved from flyer design to UI/UX design.
                                        I completed 5–6 mobile and web UI projects and won the first
                                        round of a KDU(2024-2025) UI/UX competition.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Figma
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            UI/UX principles
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Wireframing & prototyping
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Mobile & web app design
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">03. 2024 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Frontend Web Development
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I learned HTML, CSS, JavaScript, Tailwind CSS, and basic animations.
                                        Using these technologies, I completed two frontend projects with
                                        responsive and modern user interfaces.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            HTML, CSS, JavaScript
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Tailwind CSS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Responsive design
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Basic animations (Motion)
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">04. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Backend Development (Node.js & MongoDB)
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I learned Node.js, Express.js, and MongoDB.
                                        I completed one full-stack project, handling backend
                                        logic, APIs, and database management.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Node.js
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Express.js
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            MongoDB
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            REST APIs
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Backend logic
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">05. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        JavaFX Desktop Application Development
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I developed a JavaFX-based university parking management system.
                                        Users can view slots, book parking, and select time durations using
                                        a real-time MongoDB database.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            OOP Concepts
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Java & JavaFX
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Scene Builder
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Desktop application design
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Database integration (MongoDB)
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">06. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Python for Cybersecurity
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I completed a Python for Cybersecurity course on Udemy.
                                        I learned scripting for automation, security tasks,
                                        and basic attack and defense concepts.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Python scripting
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Automation
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Security-focused programming
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Basic cyber tools usage
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20 
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">07. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Network Analysis with Wireshark
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I learned how to analyze network traffic using Wireshark.
                                        I practiced capturing packets and identifying suspicious network activities.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Wireshark
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Packet analysis
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Network traffic monitoring
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Basic threat detection
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20 
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">08. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Shell Scripting
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I completed a shell scripting course and learned to automate tasks,
                                        manage files, and write scripts for system-level operations.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Bash scripting
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Linux commands
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            File & process handling
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">09. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Penetration Testing & Networking
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I completed penetration testing training and Cisco Network Fundamentals.
                                        I learned basic ethical hacking techniques and strong networking foundations.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Penetration testing basics
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Ethical hacking concepts
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Networking fundamentals
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Security mindset
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20 
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">10. 2025 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        ISC2 Certified in Cybersecurity (CC)
                                    </h3>
                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        I completed the ISC2 Certified in Cybersecurity (CC) exam, gaining knowledge in
                                        security principles, risk management, and cyber defense fundamentals.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Cybersecurity fundamentals
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Risk management
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Security controls
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Industry best practices
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>

                        <hr className="border mt-13 opacity-20" />
                        {/* Projects */}
                        
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2021</p>

                                        <a
                                            href="https://www.linkedin.com/posts/chalitha-aluwihare-856781219_webdevelopment-tailwindcss-responsivedesign-activity-7399257520076185600-Ji0w"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/responsive-ui-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P01} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Responsive Grid Layout Practice for Beginners
                                    </h3>

                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        Adobe Photoshop is a powerful software used for editing,
                                        designing, and creating images. It allows photo retouching,
                                        graphic design, digital painting, and creating professional
                                        visuals for web and print.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            ReactJS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TailwindCSS
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2021</p>

                                        <a
                                            href="https://www.linkedin.com/posts/chalitha-aluwihare-856781219_webdevelopment-tailwindcss-responsivedesign-activity-7399257520076185600-Ji0w"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/responsive-ui-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P01} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Responsive Grid Layout Practice for Beginners
                                    </h3>

                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        Adobe Photoshop is a powerful software used for editing,
                                        designing, and creating images. It allows photo retouching,
                                        graphic design, digital painting, and creating professional
                                        visuals for web and print.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            ReactJS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TailwindCSS
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2021</p>

                                        <a
                                            href="https://www.linkedin.com/posts/chalitha-aluwihare-856781219_webdevelopment-tailwindcss-responsivedesign-activity-7399257520076185600-Ji0w"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/responsive-ui-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P01} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Responsive Grid Layout Practice for Beginners
                                    </h3>

                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        Adobe Photoshop is a powerful software used for editing,
                                        designing, and creating images. It allows photo retouching,
                                        graphic design, digital painting, and creating professional
                                        visuals for web and print.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            ReactJS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TailwindCSS
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2021</p>

                                        <a
                                            href="https://www.linkedin.com/posts/chalitha-aluwihare-856781219_webdevelopment-tailwindcss-responsivedesign-activity-7399257520076185600-Ji0w"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/responsive-ui-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P01} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Responsive Grid Layout Practice for Beginners
                                    </h3>

                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        Adobe Photoshop is a powerful software used for editing,
                                        designing, and creating images. It allows photo retouching,
                                        graphic design, digital painting, and creating professional
                                        visuals for web and print.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            ReactJS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TailwindCSS
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2021</p>

                                        <a
                                            href="https://www.linkedin.com/posts/chalitha-aluwihare-856781219_webdevelopment-tailwindcss-responsivedesign-activity-7399257520076185600-Ji0w"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/responsive-ui-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P01} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Responsive Grid Layout Practice for Beginners
                                    </h3>

                                    <h1 className="font-ibmmono text-[10px] font-light">
                                        Adobe Photoshop is a powerful software used for editing,
                                        designing, and creating images. It allows photo retouching,
                                        graphic design, digital painting, and creating professional
                                        visuals for web and print.
                                    </h1>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            ReactJS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TailwindCSS
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        
                        
                        







                        <hr className="border mt-13 opacity-50" />
                        <p className="mt-10 font-light text-[10px] font-ibmmono">Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
                        <p className="mb-30 mt-2 font-light text-[9px] font-ibmmono">© 2025 Chalitha Aluwihare. All rights reserved.</p>



                    </div>




                </div>
            </>



        </>
    );
}

export default LandingPage