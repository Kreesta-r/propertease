import Image from 'next/image';
import React from 'react';

const Section0 = () => {
  return (
    <>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
              At Propertease, we understand that finding the perfect home is more than just a transaction -it's a milestone in life's 
                journey. That's why we are dedicated to providing exceptional service, expert guidance, and unparalled support every step of the way.<br/><br/>Our team of experienced professionals is passionate about helping you unlock the door to your dream house, 
                and we are commited to making the process as smooth and stress-free as possible.
              </p>
            </article>
          </div>
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt="Beautiful modern home exterior"
              src="/banner3.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Section0;
