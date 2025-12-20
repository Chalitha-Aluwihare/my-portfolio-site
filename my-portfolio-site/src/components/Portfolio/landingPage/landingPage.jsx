import React, { useEffect, useState } from "react";
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
import { LuExternalLink } from "react-icons/lu";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Profile from '../../../assets/landingPage/profile.png';
import P01 from '../../../assets/landingPage/P01.jpeg';
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {

    {/* Cetificate Section open coloe buttons*/ }
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show); // toggle state
    };

    const [show02, setShow02] = useState(false);

    const handleClick02 = () => {
        setShow02(!show02); // toggle state
    };

    const [show03, setShow03] = useState(false);

    const handleClick03 = () => {
        setShow03(!show03); // toggle state
    };

    const [show04, setShow04] = useState(false);

    const handleClick04 = () => {
        setShow04(!show04); // toggle state
    };

    const [show06, setShow06] = useState(false);

    const handleClick06 = () => {
        setShow04(!show06); // toggle state
    };

    {/* Cetificate Section view all buttons*/ }

    const [cShow, setcShow] = useState(false);

    const handleClick05 = () => {
        setcShow(!cShow);
    }

    {/* My Journy view all buttons*/ }

    const [show07, setShow07] = useState(false);

    const handleClick07 = () => {
        setShow07(!show07); // toggle state
    };

    const [show08, setShow08] = useState(false);

    const handleClick08 = () => {
        setShow08(!show08); // toggle state
    };

    const [show09, setShow09] = useState(false);

    const handleClick09 = () => {
        setShow09(!show09); // toggle state
    };

    const [show10, setShow10] = useState(false);

    const handleClick10 = () => {
        setShow10(!show10); // toggle state
    };

    {/* My jounary Section view all buttons*/ }

    const [jShow, setjShow] = useState(false);

    const handleClick11 = () => {
        setjShow(!jShow);
    }
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


                        <div className="flex justify-between mt-6 gap-3 mb-7">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">Cybersecurity & Technical Certifications</h1>

                        </div>
                        {/* Cetification Section */}
                        <div className="mt-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="">
                                <div className="flex justify-between">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Cisco Introduction to Cybersecurity
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex font-ibmmono items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D98CFF] hover:bg-white/20 cursor-pointer
                                            text-sm font-semibold py-1 px-3 rounded-full transition-all duration-300">
                                                <button className="text-[#D98CFF] cursor-pointer  text-sm font-semibold ">
                                                    Credential
                                                </button>
                                                <LuExternalLink />
                                            </div>
                                        </div>
                                        <motion.button
                                            onClick={() => setShow(!show)}
                                            className="flex items-center gap-2"
                                            animate={{ rotate: show ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowDown
                                                size={28}
                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                            />

                                        </motion.button>


                                    </div>


                                </div>
                                <p className="font-ibmmono text-md font-semibold mb-1">
                                    Cisco Networking Academy
                                </p>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    Credential ID 2453678
                                </p>

                                <AnimatePresence>
                                    {show && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                        >

                                            <div>
                                                <hr className="border mt-2 mb-2 opacity-20" />
                                                <p className="font-ibmmono text-[10px] font-light mb-1">
                                                    Introductory course providing an overview of cyber threats,
                                                    attack types, security principles, and cybersecurity career paths.
                                                    Builds awareness and foundational understanding of the cyber domain.
                                                </p>
                                            </div>
                                        </motion.p>
                                    )}
                                </AnimatePresence>




                                <div className="flex gap-3 flex-wrap mt-3">
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Cyber Awareness
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Threat Identification
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Security Basics
                                    </button>
                                </div>

                            </div>


                        </div>

                        <div className="mt-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="">
                                <div className="flex justify-between">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        ISC² Certified in Cybersecurity
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex font-ibmmono items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D98CFF] hover:bg-white/20 cursor-pointer
                                                text-sm font-semibold py-1 px-3 rounded-full transition-all duration-300">
                                                <button className="text-[#D98CFF] cursor-pointer  text-sm font-semibold ">
                                                    Credential
                                                </button>
                                                <LuExternalLink />
                                            </div>
                                        </div>
                                        <motion.button
                                            onClick={() => setShow02(!show02)}
                                            className="flex items-center gap-2"
                                            animate={{ rotate: show02 ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowDown
                                                size={28}
                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                            />
                                        </motion.button>


                                    </div>


                                </div>
                                <p className="font-ibmmono text-md font-semibold mb-1">
                                    ISC² Organization
                                </p>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    Credential ID 2453678
                                </p>



                                <AnimatePresence>
                                    {show02 && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                        >

                                            <div>
                                                <hr className="border mt-2 mb-2 opacity-20" />
                                                <p className="font-ibmmono text-[10px] font-light mb-1">
                                                    Entry-level cybersecurity certification covering core security principles,
                                                    including the CIA triad, access control models, risk management, governance,
                                                    and basic incident response. Demonstrates strong foundational knowledge for
                                                    cybersecurity and SOC intern roles.
                                                </p>
                                            </div>
                                        </motion.p>
                                    )}
                                </AnimatePresence>




                                <div className="flex gap-3 flex-wrap mt-3">
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Network Security
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Risk Management
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Ethical Hacking
                                    </button>
                                </div>

                            </div>


                        </div>

                        <div className="mt-3 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="">
                                <div className="flex justify-between">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Cisco CyberOps Associate (In Pro.)
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex font-ibmmono items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D98CFF] hover:bg-white/20 cursor-pointer
                                                text-sm font-semibold py-1 px-3 rounded-full transition-all duration-300">
                                                <button className="text-[#D98CFF] cursor-pointer  text-sm font-semibold ">
                                                    Credential
                                                </button>
                                                <LuExternalLink />
                                            </div>
                                        </div>
                                        <motion.button
                                            onClick={() => setShow03(!show03)}
                                            className="flex items-center gap-2"
                                            animate={{ rotate: show03 ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowDown
                                                size={28}
                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                            />
                                        </motion.button>


                                    </div>


                                </div>
                                <p className="font-ibmmono text-md font-semibold mb-1">
                                    Cisco Networking Academy | University of Moratuwa
                                </p>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    Credential ID 2453678
                                </p>



                                <AnimatePresence>
                                    {show03 && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                        >

                                            <div>
                                                <hr className="border mt-2 mb-2 opacity-20" />
                                                <p className="font-ibmmono text-[10px] font-light mb-1">
                                                    Focused on Security Operations Center (SOC) fundamentals,
                                                    including network security monitoring, log analysis, threat detection,
                                                    and basic incident handling. Prepares for Cybersecurity Intern / SOC Analyst
                                                    (Tier 1) roles.
                                                </p>
                                            </div>
                                        </motion.p>
                                    )}
                                </AnimatePresence>




                                <div className="flex gap-3 flex-wrap mt-3">
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        SOC Operations
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Threat Analysis
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Log Monitoring
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                        Incident Response
                                    </button>
                                </div>

                            </div>


                        </div>




                        <AnimatePresence>
                            {cShow && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                >

                                    <div>
                                        <div className="mt-1 p-4 rounded-xl border border-white/20
                                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                                            transition-all duration-300">

                                            <div className="">
                                                <div className="flex justify-between">
                                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                                        Python for Cybersecurity
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex font-ibmmono items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D98CFF] hover:bg-white/20 cursor-pointer
                                                text-sm font-semibold py-1 px-3 rounded-full transition-all duration-300">
                                                                <button className="text-[#D98CFF] cursor-pointer  text-sm font-semibold ">
                                                                    Show Credential
                                                                </button>
                                                                <LuExternalLink />
                                                            </div>
                                                        </div>
                                                        <motion.button
                                                            onClick={() => setShow04(!show04)}
                                                            className="flex items-center gap-2"
                                                            animate={{ rotate: show04 ? 90 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <FaArrowDown
                                                                size={28}
                                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                                            />
                                                        </motion.button>


                                                    </div>


                                                </div>
                                                <p className="font-ibmmono text-md font-semibold mb-1">
                                                    Coursera
                                                </p>
                                                <p className="font-ibmmono text-sm font-light mb-1">
                                                    Credential ID 2453678
                                                </p>

                                                <AnimatePresence>
                                                    {show04 && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                                        >

                                                            <div>
                                                                <hr className="border mt-2 mb-2 opacity-20" />
                                                                <p className="font-ibmmono text-[10px] font-light mb-1">
                                                                    Introduces Python scripting for cybersecurity use cases such as automation,
                                                                    log analysis, and basic security tasks. Enhances efficiency in security
                                                                    operations and analysis.
                                                                </p>
                                                            </div>
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>




                                                <div className="flex gap-3 flex-wrap mt-3">
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Python Scripting
                                                    </button>
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Automation
                                                    </button>
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Log Analysis
                                                    </button>
                                                </div>

                                            </div>


                                        </div>
                                        {/*Section 02*/}
                                        <div className="mt-4 p-4 rounded-xl border border-white/20
                                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                                            transition-all duration-300">

                                            <div className="">
                                                <div className="flex justify-between">
                                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                                        Penetration Testing
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex font-ibmmono items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D98CFF] hover:bg-white/20 cursor-pointer
                                                text-sm font-semibold py-1 px-3 rounded-full transition-all duration-300">
                                                                <button className="text-[#D98CFF] cursor-pointer  text-sm font-semibold ">
                                                                    Show Credential
                                                                </button>
                                                                <LuExternalLink />
                                                            </div>
                                                        </div>
                                                        <motion.button
                                                            onClick={() => setShow06(!show06)}
                                                            className="flex items-center gap-2"
                                                            animate={{ rotate: show06 ? 90 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <FaArrowDown
                                                                size={28}
                                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                                            />
                                                        </motion.button>


                                                    </div>


                                                </div>
                                                <p className="font-ibmmono text-md font-semibold mb-1">
                                                    Coursera
                                                </p>
                                                <p className="font-ibmmono text-sm font-light mb-1">
                                                    Credential ID 2453678
                                                </p>

                                                <AnimatePresence>
                                                    {show06 && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                                        >

                                                            <div>
                                                                <hr className="border mt-2 mb-2 opacity-20" />
                                                                <p className="font-ibmmono text-[10px] font-light mb-1">
                                                                    Covers fundamentals of ethical hacking, vulnerability assessment,
                                                                    and penetration testing concepts. Provides exposure to offensive security
                                                                    techniques and security testing methodologies.
                                                                </p>
                                                            </div>
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>




                                                <div className="flex gap-3 flex-wrap mt-3">
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Ethical Hacking Basics
                                                    </button>
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Vulnerability Assessmen
                                                    </button>
                                                    <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                        Security Testing
                                                    </button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <button
                            className="font-ibmmono mt-3 font-light bg-white/10 backdrop-blur-sm 
                                text-[#D98CFF] text-[10px] py-1 px-3 rounded-full 
                                transition-all duration-300 cursor-pointer"
                            onClick={() => setcShow(!cShow)}
                        >
                            {cShow ? "Show Less" : "View All 1+"}
                        </button>


                        <hr className="border mt-13 opacity-20" />
                        <div className="flex justify-between mt-6 gap-3">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">My Technology & Cybersecurity Journey</h1>


                        </div>
                        {/* my journy */}
                        <div className="mt-8 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">2022 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center gap-2">
                                        <h3 className="font-ibmmono font-semibold text-white text-lg">
                                            Flyer & UI/UX Design Entrepreneur
                                        </h3>
                                        <motion.button
                                            onClick={() => setShow07(!show07)}
                                            className="flex items-center gap-2"
                                            animate={{ rotate: show07 ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowDown
                                                size={28}
                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                            />
                                        </motion.button>
                                    </div>


                                    <AnimatePresence>
                                        {show07 && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className=" text-sm text-white opacity-70 overflow-hidden"
                                            >

                                                <div>

                                                    <p className="mt-2 font-ibmmono text-[10px] font-light">
                                                        Started my journey as a Graphic and UI/UX Designer, working with 100+
                                                        clients as a freelancer and entrepreneur. Designed user-friendly interfaces,
                                                        marketing creatives, and brand visuals while focusing on usability, clarity,
                                                        and modern design principles.
                                                    </p>
                                                </div>
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            UI/UX Design
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Graphic Design
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Client Management
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Branding
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="mt-4 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                            <div className="lg:flex items-start justify-between gap-15">
                                <div className="flex-shrink-0">
                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">2023 to Present</p>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center gap-2">
                                        <h3 className="font-ibmmono font-semibold text-white text-lg">
                                            Frontend Development
                                        </h3>
                                        <motion.button
                                            onClick={() => setShow08(!show08)}
                                            className="flex items-center gap-2"
                                            animate={{ rotate: show08 ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowDown
                                                size={28}
                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                            />
                                        </motion.button>
                                    </div>


                                    <AnimatePresence>
                                        {show08 && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className=" text-sm text-white opacity-70 overflow-hidden"
                                            >

                                                <div>

                                                    <p className="mt-2 font-ibmmono text-[10px] font-light">
                                                        Expanded into frontend development, converting UI/UX designs
                                                        into responsive and interactive web and mobile interfaces.
                                                        Worked with modern frameworks and ensured performance,
                                                        accessibility, and clean UI implementation.
                                                    </p>
                                                </div>
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            HTML
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            CSS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            JavaScript
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            React
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            Tailwind CSS
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                            Framer Motion
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <AnimatePresence>
                            {jShow && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-3 text-sm text-white opacity-70 overflow-hidden"
                                >

                                    <div>
                                        <div className="mt-2 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                            <div className="lg:flex items-start justify-between gap-15">
                                                <div className="flex-shrink-0">
                                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">2024 to Present</p>
                                                </div>
                                                <div className="flex-1">

                                                    <div className="flex justify-between items-center gap-2">
                                                        <h3 className="font-ibmmono font-semibold text-white text-lg">
                                                            Backend & Full-Stack Development
                                                        </h3>
                                                        <motion.button
                                                            onClick={() => setShow09(!show09)}
                                                            className="flex items-center gap-2"
                                                            animate={{ rotate: show09 ? 90 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <FaArrowDown
                                                                size={28}
                                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                                            />
                                                        </motion.button>
                                                    </div>

                                                    <AnimatePresence>
                                                        {show09 && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className=" text-sm text-white opacity-70 overflow-hidden"
                                                            >

                                                                <div>

                                                                    <p className="mt-2 font-ibmmono text-[10px] font-light">
                                                                        Moved into backend and full-stack development, building
                                                                        complete web and mobile solutions. Gained experience in
                                                                        databases, APIs, authentication, and server-side logic
                                                                        to support real-world applications.
                                                                    </p>
                                                                </div>
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>



                                                    <div className="flex gap-3 flex-wrap mt-3">
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Backend Logic
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Databases
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            APIs
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Web & Mobile Applications
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                        <div className="mt-4 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300">

                                            <div className="lg:flex items-start justify-between gap-15">
                                                <div className="flex-shrink-0">
                                                    <p className="font-light font-sm text-white opacity-50 text-[14px] opacity-sm ">2025 to Present</p>
                                                </div>
                                                <div className="flex-1">

                                                    <div className="flex justify-between items-center gap-2">
                                                        <h3 className="font-ibmmono font-semibold text-white text-lg">
                                                            Cybersecurity Learning & Aspiring Cybersecurity Engineer
                                                        </h3>
                                                        <motion.button
                                                            onClick={() => setShow10(!show10)}
                                                            className="flex items-center gap-2"
                                                            animate={{ rotate: show10 ? 90 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <FaArrowDown
                                                                size={28}
                                                                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-[#D98CFF] py-2 transition-all duration-300"
                                                            />
                                                        </motion.button>
                                                    </div>

                                                    <AnimatePresence>
                                                        {show10 && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className=" text-sm text-white opacity-70 overflow-hidden"
                                                            >

                                                                <div>

                                                                    <p className="mt-2 font-ibmmono text-[10px] font-light">
                                                                        Currently transitioning into cybersecurity, focusing on
                                                                        defensive security and SOC fundamentals. Actively learning
                                                                        cybersecurity principles, security operations, scripting,
                                                                        and threat analysis with the goal of becoming a Cybersecurity
                                                                        Intern and future security professional.
                                                                    </p>
                                                                </div>
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>

                                                    <div className="flex gap-3 flex-wrap mt-3">
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Cybersecurity Fundamentals
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            SOC Operations
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Threat Detection
                                                        </button>
                                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-light font-ibmmono py-1 px-3 rounded-full 
                                        transition-all duration-30">
                                                            Automation
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <button
                            className="font-ibmmono mt-3 font-light bg-white/10 backdrop-blur-sm 
                                text-[#D98CFF] text-[10px] py-1 px-3 rounded-full 
                                transition-all duration-300 cursor-pointer"
                            onClick={() => setjShow(!jShow)}
                        >
                            {cShow ? "Show Less" : "View All 1+"}
                        </button>




                        <hr className="border mt-13 opacity-20" />
                        {/* Projects */}

                        <div className="flex justify-between mt-6 gap-3 mb-7">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">Highlights of My Projects</h1>

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