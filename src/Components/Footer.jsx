import React from "react";
import { Inspect, Instagram } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="md:flex md:pt-12">
          <section className="mx-8 pt-8 md:w-[70%]">
            <p className="text-center text-gray-300">About Us</p>
            <p className="pt-4">
              Welcome to our online matrimonial biodata maker! We are a team of
              dedicated professionals with a passion for making the process of
              creating a biodata simple, easy, and enjoyable.
              <br />
              We understand the importance of finding the right match and
              believe that a great biodata is the first step in that journey.
              That's why we have made our tool easy to use and customizable,
              allowing you to create a beautiful biodata that truly represents
              you.
            </p>
          </section>
          <section className="mx-8 pt-8 md:w-[25%]">
            <p className="text-gray-300">Support</p>
            <p className="pt-4 ">
              Terms of Services
              <br />
              Privacy Policy
              <br />
              Refused Policy
              <br />
              Shipping Policy
              <br />
            </p>
          </section>
          <section className="mx-8 py-8 md:w-[25%]">
            <p className="text-gray-300">Connect with us</p>
            <div className="pt-4 ">
              <p>support@biodatamaker.app</p>
              <p className="flex">
                <Instagram />
                &nbsp;@biodatamakerapp
              </p>
              <p>@biodatamaker</p>
            </div>
          </section>
        </div>
        <div className="text-center mt-4 pb-4 text-gray-400">
            <p>Copyright 2024 - biodatamaker.app</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
