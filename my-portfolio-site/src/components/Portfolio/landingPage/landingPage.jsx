import React, { useEffect, useState, useRef } from "react";
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
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Profile from '../../../assets/landingPage/Profile.png';
import P01 from '../../../assets/landingPage/P01.jpeg';
import P02 from '../../../assets/landingPage/P02.jpeg';
import P03 from '../../../assets/landingPage/P03.jpeg';
import P04 from '../../../assets/landingPage/P04.jpeg';
import P05 from '../../../assets/landingPage/P05.png';
import P06 from '../../../assets/landingPage/P06.png';
import P07 from '../../../assets/landingPage/P07.png';
import P08 from '../../../assets/landingPage/P08.png';
import P09 from '../../../assets/landingPage/P09.png';
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


    {/* Projects Section view all buttons*/ }

    const [pShow, setpShow] = useState(false);

    const handleClick12 = () => {
        setpShow(!pShow);
    }

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

    {/* Scrolling Section 01*/ }
    const projectsRef01 = useRef(null);

    const scrollToProjects01 = () => {
        projectsRef01.current?.scrollIntoView({ behavior: "smooth" });
    };

    {/* Scrolling Section 01*/ }
    const projectsRef02 = useRef(null);

    const scrollToProjects02 = () => {
        projectsRef02.current?.scrollIntoView({ behavior: "smooth" });
    };
    {/* Scrolling Section 01*/ }
    const projectsRef03 = useRef(null);

    const scrollToProjects03 = () => {
        projectsRef03.current?.scrollIntoView({ behavior: "smooth" });
    };
    {/* Scrolling Section 01*/ }
    const projectsRef04 = useRef(null);

    const scrollToProjects04 = () => {
        projectsRef04.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <>
                <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen lg:overflow-hidden bg-[#1E0044] lg:px-30 px-5 selection:bg-[#E2A6FF]">

                    <div className="fixed inset-0 pointer-events-none circle-hover z-0"></div>

                    {/* LEFT FIXED SIDEBAR */}
                    <div className="lg:col-span-2  lg:sticky lg:top-0 lg:h-screen flex flex-col lg:mt-20 mt-5">
                        <img src={Profile} alt="Profile" className="w-[250px]" />
                        <div className="flex items-end">

                            <h2 className="font-ibmmono font-extrabold text-[40px] text-[#a263f2] leading-none mt-5">Chalitha</h2>
                        </div>
                        <h2 className="font-ibmmono font-extrabold text-[40px] text-[#a263f2] leading-none mt-5">Aluwihare</h2>
                        <p className="font-ibmmono font-semibold leading-tight text-sm text-[#dcdcdc] mt-2">
                            Aspiring Cybersecurity Engineer
                        </p>
                        <p className="font-ibmmono font-semibold leading-tight text-sm text-[#dcdcdc] mt-2">
                            Uva Wellassa University of Sri Lanka
                        </p>
                        <p className="font-ibmmono font-semibold leading-tight text-sm text-[#dcdcdc] mt-2">
                            ICT(Hons) Undergraduate
                        </p>

                        <hr className="border opacity-20 text-[#dcdcdc] mr-40 mt-4" />

                        <div className="flex items-center mt-3 gap-3">

                            <p onClick={scrollToProjects01} className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                About Me
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>

                            <p onClick={scrollToProjects02} className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Journey
                            </p>
                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>
                            <p onClick={scrollToProjects03} className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Projects
                            </p>
                        </div>
                        <div className="flex items-center mt-3 gap-3">
                            <a
                                href="https://drive.google.com/file/d/1xtOe3Nwppv69MwZLHzmV7pGMjYhnML0T/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300"
                            >
                                Resume Download
                            </a>



                            <p className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer ">
                                |
                            </p>

                            <p onClick={scrollToProjects04} className="font-ibmmono font-light text-sm text-white decoration-purple-400 decoration-2 cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                Contact
                            </p>

                        </div>


                        <div className='flex items-center gap-3 text-[#dcdcdc] mt-6'>


                            <a
                                href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin
                                    size={25}
                                    className="text-white hover:text-[#E2A6FF] transition-colors duration-300 cursor-pointer"
                                />
                            </a>

                            <a
                                href="https://github.com/Chalitha-Aluwihare"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub
                                    size={25}
                                    className="text-white hover:text-[#E2A6FF] transition-colors duration-300 cursor-pointer"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/share/181TRKSzZP/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook
                                    size={25}
                                    className="text-white hover:text-[#E2A6FF] transition-colors duration-300 cursor-pointer"
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/@ChalithaAluvihare"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoYoutube
                                    size={25}
                                    className="text-white hover:text-[#E2A6FF] transition-colors duration-300 cursor-pointer"
                                />
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SCROLLABLE CONTENT */}



                    <div className="lg:col-span-3 lg:h-screen lg:overflow-y-auto no-scrollbar  text-[#dcdcdc] lg:mt-10 mt-5">
                        <div className="flex items-center mt-6 gap-3 mb-5">
                            {/*<ImPacman color="#a263f2" size={25} className="text-white" />*/}
                            <h1 ref={projectsRef01} className="font-ibmmono font-bold text-xl text-[#a263f2]">Security Beyond Code</h1>
                        </div>
                        <p className="font-ibmmono font-light mb-6 text-sm ml-3">
                            I am a third-year undergraduate with a strong interest in Information Security
                            and Cybersecurity, currently building a solid foundation in core security concepts.
                            <br></br>
                            <br></br>
                            My learning areas include network security, web application security,
                            vulnerability scanning, and cloud security fundamentals. I enjoy working
                            with hands-on labs and practical exercises that help me understand real-world
                            security challenges.
                            <br></br>
                            <br></br>
                            I am continuously improving my technical and analytical skills by exploring
                            security tools, attack methodologies, and defensive techniques, while staying
                            curious about emerging threats and technologies.
                            <br></br>
                            <br></br>
                            Currently, I am seeking an Information Security Internship where I can apply
                            my knowledge, contribute to security operations, and grow as a dedicated
                            security professional.
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
                                    In Progress (Re-attempt planned)
                                </p>
                                <p className="font-ibmmono text-sm font-light mb-1">
                                    Credential ID XXXXXXXXXX
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
                        <div ref={projectsRef02} className="flex justify-between mt-6 gap-3">

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
                            {jShow ? "Show Less" : "View All 1+"}
                        </button>




                        <hr className="border mt-13 opacity-20" />
                        {/* Projects */}

                        <div ref={projectsRef03} className="flex justify-between mt-6 gap-3 mb-7">

                            <h1 className="font-ibmmono font-bold text-[#a263f2] text-xl">Highlights of My Projects</h1>

                        </div>
                        {/* Project 01 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2025</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/Cloud-Hosted-Honeypot"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P03} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Cloud-based Honeypot Deployment
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Small and medium organizations lack visibility into real attack attempts.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Deployed a cloud honeypot and analyzed attacker behavior using logs.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Honeypot
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Cloud Security Basics
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Threat Monitoring
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Log Analysis
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* Project 02 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2025</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
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


                                    <img src={P05} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        SIEM Integration with AI (ChatGPT-Enhanced)
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Traditional SIEM workflows generate many alerts that are hard to prioritize manually.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Integrated a SIEM platform with an AI assistant to enrich alerts and assist in incident triage. Built scripts to send telemetry to the AI, automate context lookup, and summarize risks.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            SIEM
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            AI/ML Integration
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Python Scripting
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Alert Enrichment
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Incident Triage.
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* Project 01 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2025</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/Microsoft-Sentinel-SIEM"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P06} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Microsoft Sentinel SIEM Implementation
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Organizations struggle to centralize security event logging and build detection logic.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Configured Microsoft Sentinel for log ingestion, analytics rules, and workbook visualizations. Developed custom detection rules and dashboards for security operations.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Microsoft Sentinel
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Log Analytics
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Cloud SIEM
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Detection Engineering.
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* Project 05 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/Vulnerability-Scanner-Deployment"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P02} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Vulnerability Scanner Deployment
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Many organizations in Sri Lanka face risks due to unpatched systems and weak security settings.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Deployed a vulnerability scanner and identified common system and network vulnerabilities.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Vulnerability Scanning
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Linux
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Basic Risk Analysis
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Network Security
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>

                        {/* Project 03 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/Metasploit-for-Beginners-Ethical-Penetration-Testing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P07} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Metasploit for Beginners — Ethical Penetration Testing
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Learning penetration testing tools in a safe and ethical way is challenging for newcomers.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Created a beginner-friendly guide to Metasploit fundamentals and executed ethical exploitation scenarios in a controlled lab.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Metasploit Framework
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Ethical Hacking
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Exploit Development Basics
                                        </button>


                                    </div>

                                </div>

                            </div>




                        </div>

                        {/* Project 03 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P04} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Wireshark – Network Traffic Analysis
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Suspicious traffic in campus and office networks can lead to security incidents.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Captured and analyzed network packets to understand normal and abnormal traffic.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Wireshark
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            TCP/IP
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Network Monitoring
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Basic Troubleshooting
                                        </button>

                                    </div>

                                </div>

                            </div>




                        </div>


                        {/* Project 04 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P04} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Wireshark – Detect Network Anomalies
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Network attacks often go unnoticed due to lack of monitoring.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Detected abnormal network behavior using packet analysis techniques.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Anomaly Detection
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Network Security
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Threat Identification
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* Project 05 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/kali-linux-learning"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P08} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Kali Linux Learning Notes (Cybersecurity OS)
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Many security tools on Kali have steep learning curves for students.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Compiled comprehensive study notes and command references while learning Kali Linux for ethical/security use.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Kali Linux
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Command Line Tools
                                        </button>


                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* Project 06 */}
                        <div className="mt-10 p-4 rounded-xl border border-white/20
                            hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 
                            transition-all duration-300 ">

                            <div className="lg:flex items-start justify-between gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <p className="font-light text-white opacity-50 text-[14px]">2026</p>

                                        <a
                                            href="https://lk.linkedin.com/in/chalitha-aluwihare-856781219?trk=public_post_feed-actor-name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>

                                        <a
                                            href="https://github.com/Chalitha-Aluwihare/python-for-cybersecurity-practice"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-white hover:text-[#D98CFF] cursor-pointer transition-colors duration-300"
                                            />
                                        </a>
                                    </div>


                                    <img src={P09} alt="" className="lg:w-[180px] w-full mb-3 lg:mb-0 rounded-lg mt-3 border border-white/20" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-ibmmono font-semibold text-white text-lg">
                                        Python for Cybersecurity Practice
                                    </h3>

                                    <div className="">
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">Problem</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Cybersecurity professionals need automation and scripting skills to handle repetitive security tasks.
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="font-ibmmono text-[15px] font-semibold">What I Did</h1>
                                            <h1 className="font-ibmmono text-[12px] font-light">
                                                Completed hands-on Python exercises focused on networking, parsing logs, automation, and security scripting from a structured course.
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap mt-3">
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Python
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Networking
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Automation
                                        </button>
                                        <button className="bg-white/10 backdrop-blur-sm text-[#D98CFF]  text-sm font-semibold py-1 px-3 rounded-full 
                                        transition-all duration-300">
                                            Security Scripts.
                                        </button>

                                    </div>

                                </div>

                            </div>


                        </div>


















                        <hr className="border mt-13 opacity-50" />
                        <p ref={projectsRef04} className="mt-10 font-light text-[10px] font-ibmmono">
                            Loosely designed in Figma and coded in Visual Studio Code by yours truly.
                            Built with React.js and Tailwind CSS, deployed with Vercel.
                            All text is set in the Inter typeface.
                        </p>

                        <p className="mb-2 mt-2 font-light text-[15px] font-ibmmono flex justify-center">
                            Contact: +94 74 030 7671 · chalithaaluwihare@gmail.com
                        </p>

                        <p className="mb-30 mt-2 font-light text-[10px] font-ibmmono flex justify-center">
                            © 2025 Chalitha Aluwihare. All rights reserved.
                        </p>





                    </div>




                </div>
            </>



        </>
    );
}

export default LandingPage
