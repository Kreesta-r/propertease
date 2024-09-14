import React from 'react';

const Section3 = () => {
  return (
    <section>
      <div className="mx-auto flex flex-col max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-gray-700 font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find your perfect home in just a few easy steps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center shadow-md h-16 w-16 mx-auto rounded-[15px] text-orange-500 border border-orange-500 text-3xl">
              1
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-700">Search</h3>
            <p className="mt-2 text-gray-600">
              Use our powerful search tools to find listings that match your criteria.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center shadow-md justify-center h-16 w-16 mx-auto rounded-[15px] text-orange-500 border border-orange-500 text-3xl">
              2
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-700">Connect</h3>
            <p className="mt-2 text-gray-600">
              Get in touch with agents or property owners directly through our platform.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center shadow-md justify-center h-16 w-16 mx-auto rounded-[15px] text-orange-500 border border-orange-500 text-3xl">
              3
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-700">Move In</h3>
            <p className="mt-2 text-gray-600">
              Complete the process and move into your new home with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
