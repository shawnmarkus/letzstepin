"use client";

import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header/Header";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Model = dynamic(() => import("../components/Model"), {
  ssr: false,
});

export default function Home() {
  const ref = useRef();
  const [selected, setSelected] = useState("");
  useEffect(() => {
    // const observer = new IntersectionObserver();
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    Object.values(ref.current.children).forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <main className="bg-[#000] ">
      {/* landing-page */}
      <Header selected={selected} />
      <div ref={ref}>
        <div className="w-full h-screen bg-[url('/images/bgvr.png')]" id="home">
          <div className="relative w-full h-full  flex justify-end ">
            <div className="w-[45vw]  portrait:w-full portrait:mx-10  my-auto mr-14">
              <h1 className=" text-[#fff] font-bold  portrait:text-[3em] landscape:text-[4em] mb-8">
                Virtualize your world
              </h1>
              <h6 className="text-[#fff] font-normal opacity-80 portrait:text-[1.5em] landscape:text-[2em] pr-6">
                Bring your imaginative world to vivid virtual life. Embark on
                virtual opulence with India's foremost 360° tour & CGI expert,
                revitalizing your digital experience.
              </h6>
            </div>
            <div className="absolute h-[100px] w-full  bottom-0 bg-gradient-to-b from-transparent from-20% to-[black]"></div>
          </div>
        </div>

        {/* about */}
        <div className="w-full  " id="about">
          <div className="p-16  self-center ">
            <h2 className="text-[3em] font-bold self-center text-center mb-10">
              Our tailored Services for Non-Existing Properties
            </h2>
            <div className=" landscape:flex">
              <div className="relative landscape:m-10 max-w-[524px]  min-w-[200px]  shadow-2xl  my-5 portrait:inline">
                <img
                  loading="lazy"
                  src={"/images/164.jpg"}
                  className="w-full object-cover rounded-3xl aspect-[3/2]  overflow-hidden "
                />
              </div>
              <div className="landscape:p-10 portrait:pt-14 ">
                <div className="text-2xl font-semibold mb-10  leading-8">
                  Unleash Your Imagination: LetzStepIn's 360° & 3D Innovation.
                  Experience the Future: Crafting Unreal Spaces.
                </div>

                <div className="text-lg  mb-10 ">
                  LetzStepIn pioneers the art of transforming visionary concepts
                  into immersive vivid realities accessible to all—anytime,
                  everywhere. Leveraging cutting-edge technology, our expertise
                  encompasses virtual staging, renovation, and crafting of fully
                  immersive 360° CGI show homes and properties. Our commitment
                  is to deliver hyper-realistic visual experiences, inviting
                  everyone to seamlessly step into non-existing spaces with
                  unparalleled realism. Explore the forefront of visualization,
                  where our perfect of blend of 360° and 3D technologies reveals
                  possibilities of an inspiring future long before a single
                  foundation stone is laid.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* location */}
        <div className="w-full " id="location">
          <div className="p-16  self-center ">
            <h2 className="text-[3em] font-bold self-center text-center mb-10">
              360° Digital Staging
            </h2>

            <div className="landscape:flex  text-lg leading-8">
              <div className="portrait:mb-10">
                <p className="">
                  Step into the pinnacle of refinement and sophistication with
                  LetzStepIn's exquisite 360° Digital Staging Service—an
                  unrivaled symphony of opulence and innovation in property
                  enhancement. Embark on a captivating 72-hour odyssey,
                  immersing yourself in the seamless fusion of avant-garde
                  technology and artistic brilliance as we infuse unparalleled
                  vitality into your space. Wave goodbye to the expense of
                  renovations.
                </p>
              </div>

              {/* 3d */}

              <div className="relative landscape:m-10 portrait:inline   max-w-[524px]  min-w-[300px]  shadow-2xl  ">
                {/* <Model image={"/models/astronaut/RobotExpressive.glb"} /> */}
                <Model image={"/models/Schlafzimmer.glb"} />
              </div>
              <div className="portrait:mt-10">
                <p>
                  Our virtuosity in virtual staging meticulously crafts an
                  opulent panorama of lifelike furniture and fittings, all
                  meticulously curated from a solitary 360° photo. Bid adieu to
                  the extravagance of physical or animated staging. Our
                  all-encompassing, bespoke service meticulously tailors a
                  fully-furnished masterpiece—a testament to bespoke elegance
                  and unmatched allure, meticulously designed to transform your
                  property into an enchanting oasis of lavish living, where
                  luxury knows no bounds to finds its truest expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* categories */}
        <div className="w-full p-16" id="categories">
          <div className="text-center my-10">
            <div className="my-6 text-[2em] font-bold self-center  ">
              Choose from 3 Type: Standard Staging • Premium Staging • Luxury
              Staging
            </div>

            <button className=" bg-[white] border rounded-full  text-[black] py-3 px-6">
              Enquire Now
            </button>
          </div>

          <div className=" landscape:flex">
            <div className="flex-[0.4] relative landscape:m-10 portrait:inline max-w-[524px]  min-w-[200px]  shadow-2xl  ">
              <Model image={"/models/Schlafzimmer.glb"} />
            </div>
            <div className="m-10 flex-[0.6]">
              <div className="text-[3em] font-bold self-center mb-10 ">
                360° Digital Renovation
              </div>

              <div className="text-lg  mb-10 ">
                Unveiling '360° Digital Transformation,' our exclusive service
                elevates interiors by digitally rejuvenating walls, floors, and
                ceilings in both residential and commercial spaces. Envision
                your property's exquisite potential prior to its creation,
                whether a complete overhaul or an upgrade in interior design
                finesse. Our cutting-edge 360° digital renovation services
                provide a refined and captivating virtual representation,
                tailored for showcasing completed projects and exploring
                lucrative development prospects. Immerse yourself in the
                unparalleled precision and luxury of our visionary
                visualizations, unlocking the full allure and grandeur of your
                forthcoming space
              </div>
            </div>
          </div>

          <div className="m-10 text-center">
            <div className="text-[3em] font-bold self-center mb-10">
              2D Photo Virtual Staging
            </div>
            <div className="my-5  ">
              <p className="m-0 text-lg font-semibold ">
                Revolutionize spaces with our digital staging and renovation!
                From 2D photos to immersive 360° views, we breathe life into
                unfinished or under-renovation spaces.
              </p>
              <p className="m-0 text-base  ">
                Witness the transformation in our samples below.
              </p>
            </div>

            <div className="text-lg   mb-10 landscape:flex landscape:justify-between">
              <div className="w-fit mx-auto  my-10">
                <div className="text-center mx-4">
                  <p className="text-[1.2em] font-bold self-center">
                    Premium Staging: 2D Photo
                  </p>
                  <div className="relative max-w-[440px]  aspect-[440/150] rounded-3xl  overflow-hidden shadow-2xl  my-5">
                    <img
                      src={"/images/prem.jpg"}
                      alt="err"
                      className="w-full"
                    />
                  </div>
                  <p className="text-[1.2em] font-bold self-center mb-4">
                    Starts@ ₹9,999/- only t&c*
                  </p>
                  <button className=" bg-[white] border rounded-full  text-[black] py-3 px-6">
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="w-fit mx-auto my-10">
                <div className="text-center mx-4">
                  <p className="text-[1.2em] font-bold self-center">
                    Premium Staging: 2D Photo
                  </p>
                  <div className="relative max-w-[440px]  aspect-[440/150] rounded-3xl  overflow-hidden shadow-2xl  my-5">
                    <img
                      src={"/images/prem.jpg"}
                      alt="err"
                      className="w-full"
                    />
                  </div>
                  <p className="text-[1.2em] font-bold self-center mb-4">
                    Starts@ ₹9,999/- only t&c*
                  </p>
                  <button className=" bg-[white] border rounded-full  text-[black] py-3 px-6">
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="w-fit mx-auto my-10">
                <div className="text-center mx-4">
                  <p className="text-[1.2em] font-bold self-center">
                    Premium Staging: 2D Photo
                  </p>
                  <div className="relative max-w-[440px]  aspect-[440/150] rounded-3xl  overflow-hidden shadow-2xl  my-5">
                    <img
                      src={"/images/prem.jpg"}
                      alt="err"
                      className="w-full"
                    />
                  </div>
                  <p className="text-[1.2em] font-bold self-center mb-4">
                    Starts@ ₹9,999/- only t&c*
                  </p>
                  <button className=" bg-[white] border rounded-full  text-[black] py-3 px-6">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="m-10 mb-0">
            <div className=" flex portrait:flex-col-reverse items-center ">
              <div className="mt-6 flex-[0.6]">
                <div className="text-[3em]  font-bold self-center mb-10 break-words overflew-wrap">
                  360° Digital Renovation
                </div>
                <div className="text-lg leading-10 font-medium landscape:my-6 ">
                  Unveiling '360° Digital Transformation,' our exclusive service
                  elevates interiors by digitally rejuvenating walls, floors,
                  and ceilings in both residential and commercial spaces.
                  Envision your property's exquisite potential prior to its
                  creation, whether a complete overhaul or an upgrade in
                  interior design finesse. Our cutting-edge 360° digital
                  renovation services provide a refined and captivating virtual
                  representation, tailored for showcasing completed projects and
                  exploring lucrative development prospects. Immerse yourself in
                  the unparalleled precision and luxury of our visionary
                  visualizations, unlocking the full allure and grandeur of your
                  forthcoming space
                </div>
                <button className=" bg-[white] border rounded-full  text-[black] py-3 px-6 my-3 ">
                  Enquire Now
                </button>
              </div>
              <div className="relative flex-[0.4] landscape:m-10 portrait:inline w-[524px]  min-w-[200px]  shadow-2xl  ">
                {/* <Model image={"/models/astronaut/Astronaut.glb"} /> */}
                <Model image={"/models/Schlafzimmer.glb"} />
              </div>
            </div>
          </div>
        </div>

        {/* contact us */}
        <div className="w-full px-16 pb-16" id="contact">
          <div className=" landscape:flex  ">
            <div className=" flex-1 p-4 place-self-center ">
              <div className="landscape:flex gap-3 mb-6">
                <div className=" w-[500px]  aspect-[3/2] portrait:inline">
                  <img
                    loading="lazy"
                    src={"/images/see.webp"}
                    className="w-full object-cover rounded-3xl  overflow-hidden "
                  />
                </div>
                <div className="text-[2em]  font-bold self-center my-6 break-words overflew-wrap">
                  Seeking Digital Staging, Renovation, or CGI Services?
                </div>
              </div>
              <p className="m-0 text-lg font-semibold ">
                Discover the power of our elite 2D & 360° CGI services in
                transforming spaces today! Reach out to access our
                transformative services today
              </p>
            </div>
            <div className="flex-1 landscape:pl-8 landscape:pt-8 landscape:border-l border-white">
              <div className="text-[2em] pb-4 font-bold self-center mb-10 break-words overflew-wrap border-b border-white ">
                Details
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className="w-full bg-[#349bd6]
      p-8"
        id="footer"
      >
        <div className="grid  grid-cols-2 gap-6">
          <div className="col-span-2  lg:col-span-1 self-start">
            <p className="text-[2.5em] font-bold  leading-0">Letzstepin</p>
            <p className="opacity-80 font-light"> Join Our 360° Network</p>
            <p className="text-base font-medium">
              Today LetzStepIn advantage unfolds with a plethora of benefits,
              discounts, and rewards accompanying every online and offline
              purchase. Our vision is grand – to evolve into the world's most
              trusted, valued, secure, and advanced e-commerce 360° virtual
              marketplace. We aspire to be accessible hassle-free to individuals
              globally, anywhere, anytime. Our platform is designed for those
              tech-savvy and internet-enabled individuals seeking ease and
              efficiency.
            </p>
          </div>
          <div className="grid col-span-2 lg:col-span-1 grid-cols-2 gap-6 self-center">
            <div>
              <p className="text-lg font-semibold">USEFUL LINKS</p>
              <ul>
                <li className="py-2">Home</li>
                <li className="py-2">About us</li>
                <li className="py-2">Jobs</li>
                <li className="py-2">Refer & earn</li>
                <li className="py-2">Terms of service</li>
                <li className="py-2">Privacy policy</li>
                <li className="py-2">Contact us</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold ">OUR SERVICES</p>
              <ul>
                <li className="py-2">Food</li>
                <li className="py-2">Delivery</li>
                <li className="py-2">Shopping</li>
                <li className="py-2">Healthcare</li>
                <li className="py-2">Real-estate</li>
                <li className="py-2">Fitness</li>
                <li className="py-2">Eduaction </li>
                <li className="py-2">Automobile</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
