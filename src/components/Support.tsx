"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger the children animations
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Slide-up effect
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[70rem] h-[50rem] mt-10 bg-white rounded-[3rem] items-center justify-center flex flex-col`}
    >
      <motion.div variants = {itemVariants} className = "">
      <motion.h3
        className="font-bold text-[#717171] text-5 uppercase tracking-widest leading-4 mt-24"
      >
        support
      </motion.h3>
      <motion.h1
        className="text-6xl pt-2 font-bold leading-[5rem]"
        >
        Give your audience <br /> an easy way to say thanks.
      </motion.h1>

      <motion.p
        className="text-2xl pt-6"
        >
        Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans <br /> can make the payment (buy you a coffee) and leave a message.
      </motion.p>

      <motion.article
        className="items-center   w-[24rem] h-[23rem] border border-gray-200 shadow-md rounded-[2.5rem] my-20 ml-[15rem]"
      >
        <motion.h1
          
          className="font-bold ml-8 text-start mt-6 text-2xl tracking-wide"
          >
          Buy Juliet a coffee
        </motion.h1>

        <motion.div
          
          className="flex items-center justify-center mt-8 w-full"
          >
          <motion.div
          
          className="h-[5rem] rounded-lg xs:h-56 w-[85%] xs:mt-14 flex relative rounded-8 items-center border border-solid border-red-200 bg-red-50 xs:px-16"
          />
          <span className="absolute -translate-x-[7.5rem] translate-y-0.5 text-[2.5rem]">☕</span>
          <Image
            src="/multiplication.svg"
            alt="multiplication"
            width={20}
            height={20}
            className="absolute -translate-x-[4rem] w-fit"
          />
          <motion.div
            
            className="absolute w-10 h-10 flex-shrink-0 xs:w-7 xs:h-7 xs:mr-8 xs:ml-12 flex items-center justify-center rounded-full text-white text-16 bg-red-600/90 font-bold  mr-10"
            >
            <span>1</span>
          </motion.div>
          <motion.div className="absolute w-10 h-10 flex-shrink-0 mr-10 xs:w-7 xs:h-7 xs:mr-8 flex items-center justify-center bg-white rounded-full border border-red-600 text-red-500 text-16 translate-x-[3rem] font-bold">
            3
          </motion.div>
          <motion.div className="absolute w-10 h-10 flex-shrink-0 mr-10 xs:w-7 xs:h-7 xs:mr-8 flex items-center justify-center bg-white rounded-full border border-red-600 text-red-500 text-16 font-bold translate-x-[6rem]">
            5
          </motion.div>
          <motion.div className="absolute w-10 h-10 flex-shrink-0 xs:w-7 xs:h-7 flex items-center justify-center bg-white rounded-2 border-1 p-5 translate-x-[8rem] border border-gray-300 text-gray-400">
            1
          </motion.div>

          <motion.div
            className="absolute shadow-md h-[4rem] -translate-x-[19.5rem] translate-y-[2rem] bg-white w-max rounded-3xl border border-gray-200 p-4 flex items-center justify-between"
            >
            <Image
              src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_2.png"
              width="32"
              height="32"
              alt="creator"
              />
            <span className="ml-2 text-sm text-dark font-bold">Anie bought 10 coffees</span>
          </motion.div>

          <motion.div
            className=" absolute xs:hidden bg-white border border-gray-200  translate-y-[8rem] -translate-x-[17.5rem] w-max rounded-3xl shadow-card p-1 flex items-start justify-between"
            >
            <Image
              src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_3.png"
              width="32"
              height="32"
              alt="creator"
              data-nuxt-img=""
              className="w-fit absolute translate-x-[0.5rem] translate-y-[0.5rem]"
              />
            <motion.div  className="ml-12 mt-2">
              <span className="text-sm font-bold">Cathy G bought a coffee.</span>
              <motion.div  className="flex items-center mt-6">
                <Image
                  src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_6.png"
                  width="32"
                  height="32"
                  alt="creator"
                  className="-translate-y-4"
                />
                <span className="ml-8 text-sm font-regular -translate-y-4 -translate-x-4">Thanks Cathy! ❤️</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute xs:hidden h-[6rem] translate-x-[21rem] -translate-y-[3rem] border border-gray-200 px-4 py-4 ps-5 bg-white w-max rounded-[1.5rem] shadow-md flex items-start justify-between"
            >
            <Image
              src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_2.png"
              width="32"
              height="32"
              alt="creator"
              data-nuxt-img=""
              />
            <motion.div className="ml-2">
              <motion.span
                
                className="text-[0.8rem] font-bold"
              >
                Alex bought 25 coffees
              </motion.span>
              <motion.div className="flex items-center mt-8">
                <Image
                  src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_6.png"
                  width="32"
                  height="32"
                  alt="creator"
                  data-nuxt-img=""
                  className="-translate-y-5"
                  />
                <span className="ml-8 -translate-y-5 -translate-x-7 text-sm font-regular">Thanks Alex!</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute translate-x-[19rem] translate-y-[5.5rem] ml-4 bg-white border border-gray-200 w-[22.5rem] rounded-3xl p-4 h-[10rem] flex items-start justify-between"
            >
            <Image
              src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_1.png"
              width="32"
              height="32"
              alt="creator"
              data-nuxt-img=""
              className=""
              />
            <motion.div >
              <span className="text-sm mr-20 font-bold tracking-tight">Tony Steel bought 3 coffees.</span>
              <span className="text-start block ml-3 tracking-tight mt-2 text-sm line-clamp-3 font-light">
                Absolutely love the show! I&apos;m already waiting for next week&apos;s episode, lol. Thank you, and keep doing what you&apos;re doing.
              </span>
              <motion.div  className="flex items-center ml-3 mt-2">
                <Image
                  src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_thumbnail_4.png"
                  width="24"
                  height="24"
                  alt="creator"
                  data-nuxt-img=""
                  className=""
                  />
                <span className="ml-2 text-sm tracking-tight">Thanks Tony!</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="shadow-xl bg-white w-14 h-14 xs:w-10 xs:h-10 rounded-full flex items-center border border-gray-200 justify-center text-2xl absolute -translate-x-[12.5rem] -translate-y-[3rem]"
            >
            ❤️
          </motion.div>

          <motion.div
            className="text-2xl border shadow-xl border-gray-200 bg-white w-14 h-14 xs:w-40 xs:h-40 rounded-full flex items-center justify-center text-24 absolute -translate-x-[11rem] -translate-y-[8rem]"
            >
            💯
          </motion.div>

          <motion.div
            className="shadow-lg border-gray-200 border bg-white w-11 h-11 xs:w-32 xs:h-32 rounded-full flex items-center justify-center text-xl absolute translate-y-[2rem] -translate-x-[11rem]"
          >
            👋
          </motion.div>
        </motion.div>

        <div className="h-[6rem] w-[85%] bg-gray-100 rounded-md ms-7 my-4 text-start text-gray-500 text-sm pt-4 ps-4">
          Say something nice...
        </div>
        <div className="rounded-3xl ms-7 mb-16 w-[85%] bg-[#D8573F] px-28 py-2 text-md text-gray-100 font-bold tracking-tighter">
          Support $3
        </div>
      </motion.article>
     

            </motion.div>
    </motion.article>
  )
}

export default Support
