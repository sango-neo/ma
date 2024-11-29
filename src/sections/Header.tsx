"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  inputPlaceholder: string;
  button: ButtonProps;
  termsAndConditions: string;
  image: ImageProps;
};

export type Header16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header16 = (props: Header16Props) => {
  const heroImgRef = useRef(null);



  const {description, button, image } = {
    ...Header16Defaults,
    ...props,
  } as Props;

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const heroImg = heroImgRef.current;
      // transition hero image to show:


    })
  }, [])

  // const [emailInput, setEmailInput] = useState<string>("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log({
  //     emailInput,
  //   });
  // };


  return (
    <section id="relume" className="px-[5%] py-28 bg-ma_transBlue md:py-36">
      <div className="absolute"></div>
      <div className="container">
        
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <h1 className="text-4xl font-semibold font-heading leading-[1.15] md:text-6xl lg:text-7xl">An Asset Management Solutions System for <span className='text-ma_blue'>Service Delivery</span> Excellence</h1>
          <div>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 w-full ">
              <a href="/">
                <Button {...button} className="bg-ma_blue text-white rounded-md border-none text-md w-full md:w-fit">{button.title}</Button>
              </a>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delayChildren: 0.5, ease: "easeInOut" }}
          ref={heroImgRef} className="relative rounded-lg"
        >
          <div className="absolute bg-ma_darkBlue blur-3xl rounded-2xl top-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-[70%] h-24"></div>
          <div className="relative rounded-lg overflow-hidden bg-ma_altBlue">
              <motion.img
                initial={{ opacity: 0, x: 50, y: '-50%'}}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeInOut" }}
               src="/assets/images/hero-dashboard.jpg" alt="Moago System dashboard" className="absolute w-[40%] max-w-[520px] border border-ma_transBlue/60 z-[1] right-[18px] top-1/2 -translate-y-1/2 rounded-lg bg-ma_transBlue/50 p-1 md:p-2 lg:p-3 md:right-9" />
              <img src={image.src} className="w-full object-cover rounded-lg -translate-x-9 md:-translate-x-18" alt={image.alt} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Header16Defaults: Header16Props = {
  description:
    "Moago Africa presents a cutting-edge, innovative system that provides a comprehensive solution for optimizing both movable and immovable assets while enhancing operational efficiency.",
  inputPlaceholder: "Enter your email",
  button: { title: "Get started" },
  termsAndConditions: `
        <p class='text-xs'>
          By clicking Sign Up you're confirming that you agree with our
          <a href='#' class='underline'>Terms and Conditions</a>.
        </p>
        `,
  image: {
    src: "/assets/images/hero-main.jpg",
    alt: "Hompage hero image",
  },
};
