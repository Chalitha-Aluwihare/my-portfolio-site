import React from "react";
import background from "../../../assets/landingPage/Background.png"
import background02 from "../../../assets/landingPage/Background-1.png"
import matrix from "../../../assets/landingPage/matrix.mp4"
import cover01 from "../../../assets/landingPage/Cover-1.png"
import cover02 from "../../../assets/landingPage/Cover-2.png"
import verify from "../../../assets/landingPage/verified-badge.png"
import cover03 from "../../../assets/landingPage/Cover-3.png"
import line01 from "../../../assets/landingPage/Line-1.png"
import projectCart01 from "../../../assets/landingPage/projectCart.png"
import projectCart02 from "../../../assets/landingPage/projectCart02.png"
import projectCart03 from "../../../assets/landingPage/projectCart03.png"
import projectCart04 from "../../../assets/landingPage/projectCart04.png"
import star from "../../../assets/landingPage/Star.png"
import Cover03 from "../../../assets/landingPage/City.mp4"
import logoBar from "../../../assets/landingPage/LogoBar.png"
import { TbPlayerTrackNextFilled } from "react-icons/tb"
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const LandingPage = () => {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="absolute z-20 font-montserrat font-light flex gap-4 xl:mt-[20px] text-white xl:text-[20px]">
                    <h1>Home</h1>
                    <h1>Services</h1>
                    <h1>Portfolio</h1>
                    <h1>About Us</h1>
                    <h1>Contact</h1>
                </div>

            </div>


            <h1 className="
            absolute z-20
            font-montserrat
            font-extrabold
            xl:text-[100px]
            text-white
            mt-[150px]
            ml-[100px]
            ">Protecting</h1>
            <h1 className="absolute
            z-20
            font-montserrat
            font-bold
            xl:text-[85px]
            text-white
            mt-[230px]
            ml-[100px]
            ">systems</h1>
            <h2 className="
            absolute
            z-20
            font-montserrat
            font-regular
            xl:text-[55px]
            text-white
            mt-[320px]
            ml-[100px]
            ">Preserving trust</h2>
            <div className="
            absolute
            z-40
            py-[10px]
            px-[25px]
            bg-gradient-to-r from-[#EB93FF] to-[#8515E0]
            rounded-full
            mt-[400px]
            ml-[100px]
            text-white
            flex
            items-center
            gap-2
            ">
                <button className="
                font-montserrat
            font-regular
            xl:text-[20px]
            text-white
                ">Read More</button>
                < TbPlayerTrackNextFilled className="w-6 h-6" />
            </div>
            <video className="absolute z-30 top-0 mix-blend-soft-light"
                autoPlay
                loop
                muted
                playsInline
                src={matrix} alt="" />
            <img className="absolute z-10 top-0" src={background} alt="" />
            <img className="absolute z-40 top-0" src={background02} alt="" />




            <div className="absolute z-50 mt-[700px] xl:mt-[790px] w-full bg-[#DFDFDF] text-white">


                <img className="absolute z-60 xl:mt-6" src={cover01} alt="" />
                <img className="absolute z-60" src={cover02} alt="" />

                <div className="absolute z-70 xl:mt-[130px] xl:ml-[650px]">
                    <div>
                        <div className="
                flex
                items-center
                ">
                            <h1 className="
                font-montserrat
                font-bold
                xl:text-[40px]
                text-black
                
                
                ">Chalitha Aluwihare</h1>
                            <img className="
                font-montserrat
                font-bold
                xl:text-[40px]
                text-black
                
                 w-8" src={verify} alt="" />
                        </div>
                        <p className="
                font-montserrat
                font-regular
                xl:text-[20px]
                text-black
                
                
                w-[600px]
                ">Uva Wellassa University Undergraduate
                            Aspiring Cybersecurity Professional & Full-Stack Developer</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="
            
            py-[10px]
            px-[25px]
            bg-gradient-to-r from-[#EB93FF] to-[#8515E0]
            rounded-full
           
            
            text-white
            flex
            items-center
            gap-2
            ">
                            <button className="
                font-montserrat
            font-regular
            xl:text-[20px]
            text-white
                ">View Projects</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                        <div className="
            
            py-[10px]
            px-[25px]
            bg-gradient-to-r from-[#EB93FF] to-[#8515E0]
            rounded-full
            
            
            text-white
            flex
            items-center
            gap-2
            ">
                            <button className="
                font-montserrat
            font-regular
            xl:text-[20px]
            text-white
                ">Download CV</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                        <div className="
            
            py-[10px]
            px-[25px]
            bg-gradient-to-r from-[#EB93FF] to-[#8515E0]
            rounded-full
            
            
            text-white
            flex
            items-center
            gap-2
            ">
                            <button className="
                font-montserrat
            font-regular
            xl:text-[20px]
            text-white
                ">Contact Me</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="absolute z-110 bg-[#590967] w-full mt-[1000px] xl:mt-[1180px]  text-white text-center space-y-5 px-40">
                <h1 className="font-montserrat font-bold xl:text-[35px] text-[#EB93FF] xl:pt-10">About Me</h1>
                <p className="
                font-montserrat font-regular xl:text-[18px] text-white xl:pb-[50px]
                ">I am a 3rd-year BICT(Hons) student at Uva Wellassa University,
                    specializing in cybersecurity with hands-on experience in ethical hacking, network security, and incident response. I enjoy solving complex security challenges and building robust, secure systems. Alongside cybersecurity, I am passionate about full-stack development, UI/UX design, and emerging technologies. As a tech enthusiast, I strive to create innovative, secure, and user-friendly digital solutions while continuously learning and growing in the field.</p>
            </div>

            {/* Skills Section */}

            <div className="absolute z-40 flex flex-col items-center justify-center w-full mt-[1400px] xl:mt-[1460px]  text-center text-white p-10 px-5 h-full space-y-10">
                
                

                {/* TOP ROW – 3 HEXAGONS */}
                <div className="flex gap-6">
                    {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="relative w-[200px] h-[230px] flex items-center justify-center ">

                            {/* Text */}
                            <div className="absolute z-80 text-center text-white ">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>

                            {/* Hexagon Image */}
                            <img className="absolute z-50 " src={star} />
                        </div>
                    ))}
                </div>

                {/* BOTTOM ROW – 2 HEXAGONS */}
                <div className="flex gap-6 mt-[-80px]">
                    {Array(2).fill(0).map((_, i) => (
                        <div key={i} className="relative w-[200px] h-[230px] flex items-center justify-center">

                            <div className="absolute z-80 text-center text-white">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>

                            <img className="absolute z-50" src={star} />
                        </div>
                    ))}
                </div>
                <div className="absolute w-full"> <img src={cover03} alt="" /> </div>

            </div>






            {/*<div class="absolute z-90 xl:mt-[2810px] border-t-6 border-purple-500 w-full" ></div>*/}
            <div className="absolute z-30 w-full mt-[1300px] xl:mt-[2260px] bg-[#590967] text-center space-y-5 text-white p-10 px-5 h-full">
                {/* Title */}
                <h1 className="font-montserrat font-bold xl:text-[35px] text-[#EB93FF]">Certificates Section</h1>

                <div className="flex justify-center gap-[10px] xl:mt-[50px]">


                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                            <p>TCP/IP</p>
                            <p>Firewalls</p>
                            <p>VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 2 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                            <p>TCP/IP</p>
                            <p>Firewalls</p>
                            <p>VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 2 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                            <p>TCP/IP</p>
                            <p>Firewalls</p>
                            <p>VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 3 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                            <p>TCP/IP</p>
                            <p>Firewalls</p>
                            <p>VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 2 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                            <p>TCP/IP</p>
                            <p>Firewalls</p>
                            <p>VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                </div>





            </div>

            <div className="absolute z-50 w-full mt-[1600px] xl:mt-[2690px] w-full text-center bg-black  text-white h-full">
                {/* Title */}
                <div className="absolute z-30 flex flex-col w-full text-center xl:mt-[50px]">
                    <h1 className=" font-montserrat font-bold xl:text-[35px] ">Projects Section</h1>
                    <h1 className=" font-montserrat font-regular xl:text-[30px]  ">Web Application Development</h1>
                </div>

                <video className="absolute z-10 w-full opacity-40 "
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={Cover03} alt="" />


                <div className="flex xl:mt-[190px]">

                    {/* Project Cart - 01 */}
                    <div className="py-[30px] px-[10px] flex flex-col items-center overflow-hidden w-[350px]">
                        <h1 className="absolute z-40 xl:mt-[150px] font-montserrat font-bold xl:text-[20px] text-white">MERN Stack <br /> Web App with Nutrition <br /> Tracking & AI Food <br />Recommendation</h1>
                        <img className="absolute z-30 rounded-xl w-[300px] opacity-70" src={projectCart01} alt="" />

                        <div className=" absolute z-40 py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full xl:mt-[280px] text-white flex items-center gap-2 ">
                            < button className=" font-montserrat font-regular xl:text-[20px] text-white">Read More</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>

                    </div>
                    {/* Project Cart - 02 */}
                    <div className="py-[30px] px-[10px] flex flex-col items-center overflow-hidden w-[350px]">
                        <h1 className="absolute z-40 xl:mt-[150px] font-montserrat font-bold xl:text-[20px] text-white">MERN Stack <br /> Web App with Nutrition <br /> Tracking & AI Food <br />Recommendation</h1>
                        <img className="absolute z-30 rounded-xl w-[300px] opacity-70" src={projectCart02} alt="" />

                        <div className=" absolute z-40 py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full xl:mt-[280px] text-white flex items-center gap-2 ">
                            < button className=" font-montserrat font-regular xl:text-[20px] text-white">Read More</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>

                    </div>
                    {/* Project Cart - 02 */}
                    <div className="py-[30px] px-[10px] flex flex-col items-center overflow-hidden w-[350px]">
                        <h1 className="absolute z-40 xl:mt-[150px] font-montserrat font-bold xl:text-[20px] text-white">MERN Stack <br /> Web App with Nutrition <br /> Tracking & AI Food <br />Recommendation</h1>
                        <img className="absolute z-30 rounded-xl w-[300px] opacity-70" src={projectCart03} alt="" />

                        <div className=" absolute z-40 py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full xl:mt-[280px] text-white flex items-center gap-2 ">
                            < button className=" font-montserrat font-regular xl:text-[20px] text-white">Read More</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>

                    </div>
                    {/* Project Cart - 02 */}
                    <div className="py-[30px] px-[10px] flex flex-col items-center overflow-hidden w-[350px]">
                        <h1 className="absolute z-40 xl:mt-[150px] font-montserrat font-bold xl:text-[20px] text-white">MERN Stack <br /> Web App with Nutrition <br /> Tracking & AI Food <br />Recommendation</h1>
                        <img className="absolute z-30 rounded-xl w-[300px] opacity-70" src={projectCart04} alt="" />

                        <div className=" absolute z-40 py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full xl:mt-[280px] text-white flex items-center gap-2 ">
                            < button className=" font-montserrat font-regular xl:text-[20px] text-white">Read More</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>

                    </div>


                </div>

            </div>

            {/* Footer */}
            <div className="absolute z-50 w-full mt-[1600px] xl:mt-[3480px] w-full text-center bg-[#6a0d7b]  text-white xl:pt-[30px] h-[330px]">


                <img src={logoBar} alt="Logo Bar" className="w-[400px] text-center mx-auto xl:mb-[20px] xl:mt-[50px]" />
                <div className='flex items-center justify-center gap-3'>
                    <FaFacebook size={30} />
                    <IoLogoYoutube size={30} />
                    <FaTwitter size={30} />
                    <FaSquareInstagram size={30} />
                    <FaLinkedin size={30} />
                    <FaGithub size={30} />
                </div>
                < button className=" font-montserrat font-regular xl:text-[15px] text-white xl:my-[20px] opacity-60 ">All Copiright Recived 2025 | +94 030 76 71 | Powerd By ArtWave PVT(LTD)</button>






            </div>

        </>
    );
}

export default LandingPage