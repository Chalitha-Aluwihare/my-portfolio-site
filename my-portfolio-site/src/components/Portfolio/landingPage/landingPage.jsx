import React from "react";
import background from "../../../assets/landingPage/Background.png"
import mobileCover from "../../../assets/landingPage/mobileCover.png"
import mobileCover02 from "../../../assets/landingPage/mobileCover02.png"
import background02 from "../../../assets/landingPage/Background-1.png"
import matrix from "../../../assets/landingPage/matrix.mp4"
import matrixForMobile from "../../../assets/landingPage/metrixForMobile.mp4"
import cover01 from "../../../assets/landingPage/Cover-1.png"
import cover02 from "../../../assets/landingPage/Cover-2.png"
import verify from "../../../assets/landingPage/verified-badge.png"
import cover03 from "../../../assets/landingPage/Cover-3.png"
import cover04 from "../../../assets/landingPage/Cover-3.mp4"
import myProfileForMobile01 from "../../../assets/landingPage/myProfileForMobileBg.png"
import myProfileForMobile02 from "../../../assets/landingPage/myProfileForMobileBg02.png"
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
            <h1 className=" absolute z-20 font-montserrat font-extrabold text-[70px] mt-[70px] ml-[20px] sm:text-[100px] md:text-[100px]  xl:text-[100px] text-white  xl:mt-[150px]  xl:ml-[100px]">Protecting</h1>
            <h1 className="absolute z-20 font-montserrat font-bold text-[65px] mt-[130px] ml-[20px] xl:text-[85px] text-white  xl:mt-[230px]  xl:ml-[100px] ">systems</h1>
            <h2 className=" absolute z-20 font-montserrat font-regular text-[40px] mt-[200px] ml-[20px] xl:text-[55px] text-white  xl:mt-[320px]  xl:ml-[100px] ">Preserving trust</h2>
            <div className=" absolute z-40 py-[3px] px-[8px] xl:py-[10px] xl:px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full mt-[260px] ml-[20px] xl:mt-[400px] xl:ml-[100px] text-white flex items-center gap-2 ">
                <button className=" font-montserrat font-regular text-[20px] xl:text-[20px] text-white">Read More</button>
                < TbPlayerTrackNextFilled className="xl:w-6 xl:h-6 " />
            </div>
            <div className=" absolute z-40 py-[3px] px-[8px] xl:py-[10px] xl:px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full mt-[260px] ml-[170px] xl:mt-[400px] xl:ml-[100px] text-white flex items-center gap-2 ">
                <button className=" font-montserrat font-regular text-[20px] xl:text-[20px] text-white">Read More</button>
                < TbPlayerTrackNextFilled className="xl:w-6 xl:h-6 " />
            </div>
            <div className="absolute z-40 mt-[320px] ml-[20px] text-white">
                <div className='flex items-center justify-center gap-3'>
                    <FaFacebook size={30} />
                    <IoLogoYoutube size={30} />
                    <FaTwitter size={30} />
                    <FaSquareInstagram size={30} />
                    <FaLinkedin size={30} />
                    <FaGithub size={30} />
                </div>
            </div>

            <div className="">
                <video className="absolute z-30 top-0 mix-blend-soft-light sm:hidden md:hidden xl:hidden" autoPlay loop muted playsInline src={matrixForMobile} alt="" />
                <video className="absolute z-30 top-0 mix-blend-soft-light hidden sm:block md:block xl:block" autoPlay loop muted playsInline src={matrix} alt="" />
                <img className="absolute z-10 top-0 hidden sm:block md:block xl:block" src={background} alt="" />
                <img className="absolute z-10 top-0 sm:hidden md:hideen xl:hidden" src={mobileCover} alt="" />
                <img className="absolute z-40 top-0 hidden sm:block md:block xl:block " src={background02} alt="" />
                <img className="absolute z-40 top-0 sm:hidden md:hidden xl:hidden" src={mobileCover02} alt="" />

            </div>


            <div className="absolute z-50 mt-[910px] xl:mt-[790px] w-full bg-[#DFDFDF] text-white">

                <img className="absolute z-60 xl:mt-6 hidden" src={cover01} alt="" />
                <img className="absolute z-60 hidden" src={cover02} alt="" />
                <img className="absolute z-60 xl:mt-6 sm:hidden" src={myProfileForMobile02} alt="" />
                <img className="absolute z-60 sm:hidden" src={myProfileForMobile01} alt="" />

                <div className="absolute z-70 xl:mt-[130px] xl:ml-[650px]">
                    <div>
                        <div className=" flex items-center ml-[240px] mt-[80px] ">
                            <h1 className=" font-montserrat font-bold text-[30px] xl:text-[40px] text-black">Chalitha Aluwihare</h1>
                            <img className=" font-montserrat font-bold xl:text-[40px] text-black w-8" src={verify} alt="" />
                        </div>
                        <p className=" font-montserrat font-regular xl:text-[20px] text-black sm:w-[600px] ml-[240px] ">Uva Wellassa University Undergraduate
                            Aspiring Cybersecurity Professional & Full-Stack Developer</p>
                    </div>
                    <div className="flex sm:items-center items-center ml-[90px] sm:gap-3 gap-2 mt-2 flex-col ">
                        <div className="py-[10px] px-[35px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full text-white flex items-center gap-2 ">
                            <button className=" font-montserrat font-regular xl:text-[20px] text-white">View Projects</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                        <div className=" py-[10px] px-[35px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full text-white flex items-center gap-2 ">
                            <button className=" font-montserrat font-regular xl:text-[20px] text-white">Download CV</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                        <div className="py-[10px] px-[35px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full text-white flex items-center gap-2 ">
                            <button className=" font-montserrat font-regular xl:text-[20px] text-white ">Contact Me</button>
                            < TbPlayerTrackNextFilled className="w-6 h-6" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="absolute z-110 bg-[#590967] w-full h-[330px] mt-[1300px] xl:mt-[1180px]  text-white text-center space-y-5 px-6">
                <h1 className="font-montserrat font-bold xl:text-[35px] mt-[20px] text-[25px] text-[#EB93FF] xl:pt-10">About Me</h1>
                <p className="
                font-montserrat font-light xl:text-[18px] text-white xl:pb-[50px]
                ">I am a 3rd-year BICT(Hons) student at Uva Wellassa University,
                    specializing in cybersecurity with hands-on experience in ethical hacking, network security, and incident response. I enjoy solving complex security challenges and building robust, secure systems. Alongside cybersecurity, I am passionate about full-stack development, UI/UX design, and emerging technologies. As a tech enthusiast, I strive to create innovative, secure, and user-friendly digital solutions while continuously learning and growing in the field.</p>
            </div>

            {/* Skills Section */}

            <div className="absolute z-40 flex flex-col items-center justify-center w-full mt-[1400px] xl:mt-[1460px]  text-center text-white p-10 px-5 h-full space-y-10">



                {/* TOP ROW – 3 HEXAGONS */}
                <div className="flex xl:gap-6 gap-3 mt-[160px]">
                    {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="relative xl:w-[200px] w-[120px] xl:h-[230px] flex items-center justify-center ">

                            {/* Text */}
                            <div className="absolute z-80 text-center text-white ">
                                <h2 className="font-bold text-[14px] xl:mb-2">Networking</h2>
                                <p className="text-[13px]">TCP/IP</p>
                                <p className="text-[13px]">Firewalls</p>
                                <p className="text-[13px]">VPNs</p>
                            </div>

                            {/* Hexagon Image */}
                            <img className="absolute z-50 " src={star} />
                        </div>
                    ))}
                </div>

                {/* BOTTOM ROW – 2 HEXAGONS */}
                <div className="flex xl:gap-6 xl:mt-[80px] gap-3">
                    {Array(2).fill(0).map((_, i) => (
                        <div key={i} className="relative xl:w-[200px] w-[120px] h-[150px] flex items-center justify-center">

                            <div className="absolute z-80 text-center text-white">
                                <h2 className="font-bold text-[14px] xl:mb-2">Networking</h2>
                                <p className="text-[13px]">TCP/IP</p>
                                <p className="text-[13px]">Firewalls</p>
                                <p className="text-[13px]">VPNs</p>
                            </div>

                            <img className="absolute z-50" src={star} />
                        </div>
                    ))}
                </div>
                <div className="absolute w-full"> <img src={cover04} alt="" /> </div>

            </div>






            {/*<div class="absolute z-90 xl:mt-[2810px] border-t-6 border-purple-500 w-full" ></div>*/}
            <div className="absolute z-30 w-full mt-[1930px] xl:mt-[2260px] bg-[#590967] text-center space-y-5 text-white p-10 px-5 h-full">
                {/* Title */}
                <h1 className="font-montserrat font-bold xl:text-[35px] text-[#EB93FF]">Certificates Section</h1>

                <div className="flex justify-center gap-[10px] xl:mt-[50px] mt-[80px]">


                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-[#EB93FF] text-[14px] xl:mb-2">Networking</h2>
                            <p className="text-[13px]">TCP/IP</p>
                            <p className="text-[13px]">Firewalls</p>
                            <p className="text-[13px]">VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-[#EB93FF] text-[14px] xl:mb-2">Networking</h2>
                            <p className="text-[13px]">TCP/IP</p>
                            <p className="text-[13px]">Firewalls</p>
                            <p className="text-[13px]">VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-[#EB93FF] text-[14px] xl:mb-2">Networking</h2>
                            <p className="text-[13px]">TCP/IP</p>
                            <p className="text-[13px]">Firewalls</p>
                            <p className="text-[13px]">VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-[#EB93FF] text-[14px] xl:mb-2">Networking</h2>
                            <p className="text-[13px]">TCP/IP</p>
                            <p className="text-[13px]">Firewalls</p>
                            <p className="text-[13px]">VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                    {/* ITEM 1 */}
                    <div className="relative flex items-center justify-center text-center w-[200px] xl:mt-[100px]">

                        <div className="absolute z-10">
                            <h2 className="font-bold text-[#EB93FF] text-[14px] xl:mb-2">Networking</h2>
                            <p className="text-[13px]">TCP/IP</p>
                            <p className="text-[13px]">Firewalls</p>
                            <p className="text-[13px]">VPNs</p>
                        </div>

                        <div className="absolute">
                            <img src={star} alt="Star" />
                        </div>

                    </div>

                </div>





            </div>

            <div className="absolute z-50 w-full mt-[2600px] xl:mt-[2690px] w-full text-center bg-black  text-white h-full">
                {/* Title */}
                <div className="absolute z-30 flex flex-col w-full text-center xl:mt-[50px]">
                    <h1 className=" font-montserrat font-bold xl:text-[35px] ">Projects Section</h1>
                    <h1 className=" font-montserrat font-regular xl:text-[30px]  ">Web Application Development</h1>
                </div>

                <video className="absolute z-10 w-full opacity-90 "
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
            <div className="absolute z-50 w-full mt-[3000px] xl:mt-[3480px] w-full text-center bg-[#6a0d7b]  text-white xl:pt-[30px] h-[330px]">


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
