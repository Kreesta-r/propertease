import Image from 'next/image';
import React from 'react';

const Section1 = () => {
  return (
    <>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-gray-700 font-bold sm:text-4xl">
            Discover Your Dream Home with Ease
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're buying, selling, or renting, we make it simple to find the perfect property. Explore a wide range of listings tailored to your needs, with all the tools and insights you need to make informed decisions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt="Beautiful modern home exterior"
              src="/banner2.png"
              className="absolute inset-0 h-full w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                At our platform, we believe in providing a seamless real estate experience. Our advanced search features and detailed property listings allow you to filter by location, price, amenities, and more, so you can quickly find a home that fits your lifestyle.
              </p>

              <p>
                With expert advice, market insights, and a dedicated support team, we're here to help you navigate the real estate market with confidence. Start your journey with us today and find your perfect home, whether it's a cozy apartment in the city or a spacious house in the suburbs.
              </p>

              <p>
                Ready to explore? Dive into our collection of hand-picked properties that match your taste and budget. Your next chapter begins here.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Section1;
