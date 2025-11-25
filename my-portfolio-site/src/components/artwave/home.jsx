import React from "react";
import homebg from "../../assets/home/mainbg.mp4";
import { TbPlayerTrackNextFilled } from "react-icons/tb"
import profile01 from "../../assets/home/profile01.png";
import profile02 from "../../assets/home/profile02.png";
import profile03 from "../../assets/home/profile03.png";
import profile04 from "../../assets/home/profile04.png";
import profile05 from "../../assets/home/profile05.png";
import profile06 from "../../assets/home/profile06.png";
import cover03 from "../../../src/assets/landingPage/Cover-3.png";
import cover02 from "../../../src/assets/landingPage/Cover-4.png";

const Home = () => {
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
                <h1 className="absolute z-20 font-montserrat font-extrabold xl:text-[90px] text-white mt-[110px]">PREMIUM WORKS</h1>
                <h1 className="absolute z-20 font-montserrat font-extrabold xl:text-[50px] text-white mt-[200px]">FOR PREMIUM CUSTOMERS!</h1>
                <p className="absolute z-20 font-montserrat font-light xl:mt-[260px] text-white xl:px-[300px]">At ArtWave, we create unique designs that make your brand stand out and connect with your audience.</p>
                <p className="absolute z-20 font-montserrat font-light xl:mt-[280px] text-white xl:px-[300px]">We help build strong brands people trust and remember.</p>
                <div className="absolute z-40 flex justify-center gap-5 xl:mt-[320px]">
                    <div className=" py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full text-white flex items-center gap-2 ">
                        <button className="font-montserrat font-regular xl:text-[20px] text-white">See Our Work</button>
                        < TbPlayerTrackNextFilled className="w-6 h-6" />
                    </div>
                    <div className=" py-[10px] px-[25px] bg-gradient-to-r from-[#EB93FF] to-[#8515E0] rounded-full text-white flex items-center gap-2 ">
                        <button className="font-montserrat font-regular xl:text-[20px] text-white">Get a Quote</button>
                        < TbPlayerTrackNextFilled className="w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="absolute xl:mt-[-40px]">
                <video src={homebg} autoPlay loop muted></video>
            </div>

            {/* Horizontal Marquee Container */}
            <div className=" absolute z-60 overflow-hidden w-full xl:mt-[540px] xl:mb-[5px]">
                <div className="flex items-center justify-center">
                    <h1 className="font-montserrat font-semibold xl:text-[25px] text-white mb-[70px]">
                        Trusted by Leading Brands in Sri Lanka
                    </h1>
                </div>

                {/* Marquee Content */}
                <div className="horizontal-marquee flex gap-[50px]">

                    {/* Duplicate Content for Infinite Loop */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center gap-[50px]">

                            

                            {/* Profile 01 */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <img className="w-[120px] h-[120px] object-cover rounded-full border-8 border-[#cd6eff]" src={profile02} alt="" />

                                {/* Name One Line */}
                                <h1 className="text-[#cd6eff] font-montserrat font-semibold xl:text-[18px] mt-2 whitespace-nowrap">
                                    Mr. Charitha Dissanayake
                                </h1>

                                {/* Department Second Line */}
                                <h1 className="text-white font-montserrat font-light xl:text-[15px]">
                                    Subject Chemistry 
                                </h1>
                            </div>

                            {/* Profile 01 */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <img className="w-[120px] h-[120px] object-cover rounded-full border-8 border-[#cd6eff]" src={profile03} alt="" />

                                {/* Name One Line */}
                                <h1 className="text-[#cd6eff] font-montserrat font-semibold xl:text-[18px] mt-2 whitespace-nowrap">
                                    Mr. Jude Kathurusingha
                                </h1>

                                {/* Department Second Line */}
                                <h1 className="text-white font-montserrat font-light xl:text-[15px]">
                                    Subject ICT
                                </h1>
                            </div>

                            {/* Profile 01 */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <img className="w-[120px] h-[120px] object-cover rounded-full border-8 border-[#cd6eff]" src={profile04} alt="" />

                                {/* Name One Line */}
                                <h1 className="text-[#cd6eff] font-montserrat font-semibold xl:text-[18px] mt-2 whitespace-nowrap">
                                    Mr. Kolitha Meemanage
                                </h1>

                                {/* Department Second Line */}
                                <h1 className="text-white font-montserrat font-light xl:text-[15px]">
                                    Subject ICT
                                </h1>
                            </div>

                            {/* Profile 01 */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <img className="w-[120px] h-[120px] object-cover rounded-full border-8 border-[#cd6eff]" src={profile05} alt="" />

                                {/* Name One Line */}
                                <h1 className="text-[#cd6eff] font-montserrat font-semibold xl:text-[18px] mt-2 whitespace-nowrap">
                                    Mr. Lasitha Prasad
                                </h1>

                                {/* Department Second Line */}
                                <h1 className="text-white font-montserrat font-light xl:text-[15px]">
                                    Subject ICT
                                </h1>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <img className="w-[120px] h-[120px] object-cover rounded-full border-8 border-[#cd6eff]" src={profile06} alt="" />

                                {/* Name One Line */}
                                <h1 className="text-[#cd6eff] font-montserrat font-semibold xl:text-[18px] mt-2 whitespace-nowrap">
                                    Mr. Amila Prasad
                                </h1>

                                {/* Department Second Line */}
                                <h1 className="text-white font-montserrat font-light xl:text-[15px]">
                                    Subject SFT
                                </h1>
                            </div>



                        </div>
                    ))}
                </div>
            </div>




            <img className="absolute z-10 xl:mt-[500px]" src={cover02} alt="" />

            <div class="absolute z-80 xl:mt-[880px] w-full flex justify-center mb-[100px]">
                <img src={cover03} alt="" />
            </div>
        </>
    );
}
export default Home;