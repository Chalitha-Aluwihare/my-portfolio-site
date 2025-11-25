import React from "react";
import background from "../../../assets/landingPage/Background.png"
import background02 from "../../../assets/landingPage/Background-1.png"
import matrix from "../../../assets/landingPage/matrix.mp4"
import cover01 from "../../../assets/landingPage/Cover-1.png"
import cover02 from "../../../assets/landingPage/Cover-2.png"
import verify from "../../../assets/landingPage/verified-badge.png"
import cover03 from "../../../assets/landingPage/Cover-3.png"
import line01 from "../../../assets/landingPage/Line-1.png"
import { TbPlayerTrackNextFilled } from "react-icons/tb"

const LandingPage = () => {

    return (
        <>
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

            <div className="absolute z-80 bg-[#190223] w-full mt-[1000px] xl:mt-[1200px] p-10 text-white text-center space-y-5 px-40">
                <h1 className="font-montserrat font-bold xl:text-[25px] text-[#EB93FF]">About Me</h1>
                <p className="
                font-montserrat font-regular xl:text-[18px] text-white
                ">I am a 3rd-year BICT(Hons) student at Uva Wellassa University,
                    specializing in cybersecurity with hands-on experience in ethical hacking, network security, and incident response. I enjoy solving complex security challenges and building robust, secure systems. Alongside cybersecurity, I am passionate about full-stack development, UI/UX design, and emerging technologies. As a tech enthusiast, I strive to create innovative, secure, and user-friendly digital solutions while continuously learning and growing in the field.</p>
            </div>

            {/* Skills Section */}

            <div className="absolute z-80 w-full mt-[1300px] xl:mt-[1470px] text-white text-center space-y-5">
                <div className="absolute w-full xl:mt-10">
                    <h1 className=" font-montserrat font-bold xl:text-[25px] text-black ">Skills Section</h1>
                    <h1 className=" font-montserrat font-regular xl:text-[20px]  text-black ">Technical Skills</h1>
                </div>
                { /* Conditional Rendering */}


                <div className="absolute xl:ml-[340px] xl:mt-[190px]">
                    <div className="flex items-center gap-[1px] absolute xl:mt-[20px] ">
                        <div className="
                        w-60 h-60
                        bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0]
                        text-white font-montserrat
                        flex flex-col justify-center items-center text-center
                        p-4
                        rotate-90
                        [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                    "
                        >

                            <div className="rotate-270">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>
                        </div>
                        <div className="
                        w-60 h-60
                        bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0]
                        text-white font-montserrat
                        flex flex-col justify-center items-center text-center
                        p-4
                        rotate-90
                        [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                    "
                        >

                            <div className="rotate-270">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>
                        </div>
                        <div className="
                        w-60 h-60
                        bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0]
                        text-white font-montserrat
                        flex flex-col justify-center items-center text-center
                        p-4
                        rotate-90
                        [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                    "
                        >

                            <div className="rotate-270">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[1px] absolute xl:mt-[200px] xl:ml-[124px] ">
                        <div className="
                        w-60 h-60
                        bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0]
                        text-white font-montserrat
                        flex flex-col justify-center items-center text-center
                        p-4
                        rotate-90
                        [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                    "
                        >

                            <div className="rotate-270">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>
                        </div>
                        <div className="
                        w-60 h-60
                        bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0]
                        text-white font-montserrat
                        flex flex-col justify-center items-center text-center
                        p-4
                        rotate-90
                        [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                    "
                        >

                            <div className="rotate-270">
                                <h2 className="font-bold text-2xl mb-2">Networking</h2>
                                <p>TCP/IP</p>
                                <p>Firewalls</p>
                                <p>VPNs</p>
                            </div>
                        </div>

                    </div>
                </div>




                <div class="">
                    <img src={cover03} alt="" />
                </div>
            </div>





            <div class="absolute z-90 xl:mt-[2810px] border-t-6 border-purple-500 w-full" ></div>
            <div className="absolute z-80 w-full mt-[1300px] xl:mt-[2260px] bg-[#190223] w-full text-center space-y-5 text-white p-10 px-5">
                {/* Title */}
                 <h1 className="font-montserrat font-bold xl:text-[25px] text-[#EB93FF]">Certificates Section</h1>
                 

                <div className="
                        w-full bg-[#190223] text-white 
                        py-20 px-5 
                        flex flex-col items-center justify-center
                        space-y-10
                        ">




                    {/* Grid Layout */}
                    <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    xl:grid-cols-6 
    gap-10 
    place-items-center
  ">
                        {/* -------- ITEM 1 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                        {/* -------- ITEM 2 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                        {/* -------- ITEM 3 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                        {/* -------- ITEM 4 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                        {/* -------- ITEM 5 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                        {/* -------- ITEM 6 -------- */}
                        <div>
                            <div
                                className="
                                            w-60 h-60 
                                            bg-white/10 
                                            bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                            
                                            rotate-90
                                            rounded-[30px] 
                                            flex justify-center items-center text-center
                                            [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                        
                                        "
                            >
                                <div className="-rotate-90">
                                    <h2 className="font-bold text-2xl mb-2 text-[#EB93FF]">Networking</h2>
                                    <p>TCP/IP</p>
                                    <p>Firewalls</p>
                                    <p>VPNs</p>
                                </div>

                            </div>
                            <div className="flex  flex-col justify-center items-center text-center">
                                <img src={line01} alt="" />
                                <div>
                                    <div
                                        className="
                                                w-20 h-20 
                                                bg-white/10 
                                                bg-gradient-to-br from-[#DA6BFF] to-[#7B19E0] 
                                                
                                                rotate-90
                                                rounded-[30px] 
                                                flex justify-center items-center text-center
                                                [clip-path:polygon(30%_5%,70%_5%,100%_50%,70%_95%,30%_95%,0%_50%)]
                                                
                                                
                                            "
                                    >
                                        <div className="-rotate-90">
                                            
                                            <p className="font-montserrat font-bold text-xl ">01</p>
                                            
                                        </div>

                                    </div></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}

export default LandingPage