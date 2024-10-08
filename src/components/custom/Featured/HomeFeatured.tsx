// import Images from "@/assets";

// const HomeFeatured = () => {
//   return (
//     <div className="relative">
//       <section className="bg-gradient-to-r from-gray-200 to-gray-900 text-white py-28 px-4 lg:px-36">
//         <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-8">
//           <div className="flex flex-col justify-center lg:pr-8">
//             <h1 className="text-xl font-bold leading-tight mb-6 lg:text-5xl text-zinc-700 xl:text-6xl font-serif font-playfair">
//               Step into Comfort
//             </h1>
//             <p className="mb-8 text-zinc-700 text-lg lg:text-xl font-light font-poppins">
//               Step up your style game with our exclusive range of shoes. From
//               trendy sneakers to elegant formal shoes, find the perfect pair
//               that matches your personality and occasion.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="#product_list"
//                 className="inline-flex items-center justify-center px-6 py-3 text-base font-medium  bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-transform transform hover:scale-105"
//               >
//                 Shop Now
//                 <svg
//                   className="w-5 h-5 ml-2 -mr-1"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center justify-end">
//             <img
//               src={Images.carBg}
//               alt="Shoe Collection"
//               className="w-[50rem] h-auto absolute right-0 bottom-0"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeFeatured;

import { Button } from "@mui/material";
import Images from "@/assets";
const HomeFeatured = () => {
  // return (
  //   <div className="relative w-full flex justify-between items-center py-28 px-4 lg:px-36">
  //     <div>
  //       <div>
  //         <h1 className="font-extrabold text-4xl">Best In Style </h1>
  //         <h1 className="font-extrabold text-4xl">Collection</h1>
  //         <h1 className="font-extrabold text-4xl">For You </h1>
  //       </div>
  //       <hr />
  //       <p>We craft the, we wont say the best,</p>
  //       <p>But through 70 years of experience in the industry</p>
  //       <Button variant="contained" className="rounded-2xl">
  //         Pre-order Now
  //       </Button>
  //     </div>

  //     <div className="hidden lg:flex items-center justify-end">
  //       <img
  //         src={Images.logo_home}
  //         className="w-[40rem] h-auto absolute right-0 bottom-0"
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <section className="bg-white py-8  antialiased  md:py-16 ">
      <div className="mx-auto grid max-w-screen-xl  px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0 ">
        <div className="content-center justify-self-start md:col-span-7  md:ml-5   md:text-start">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight font-sans  md:max-w-2xl md:text-6xl xl:text-8xl">
            Best In Style
            <br />
            Collection <br />
            For You
          </h1>
          <hr className="bg-green-400 h-[3px] mx-auto my-4  rounded  " />
          <p className="mb-4 max-w-2xl text-gray-500  md:mb-12 md:text-lg  lg:mb-5 lg:text-xl">
            We craft the, we wont say the best,
            <br />
            But through 70 years of experience in the industry
          </p>
          <a
            href="#product_list"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3.5 text-center font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-zink-800 -600  "
          >
            Shop Now
          </a>
        </div>
        <div className="hidden md:col-span-5  md:mt-0 md:flex ">
          <img
            className="relative xl:max-w-[43rem] xl:h-[43rem] lg:max-w-[30rem] lg:h-[30rem]  top-5 lg:right-14  md:right-0 pr-5"
            src={Images.logo_home}
            alt="shopping illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
