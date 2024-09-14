import React from 'react';

const Section2 = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-gray-700 font-bold sm:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore some of our top properties across different locations, from vibrant urban homes to peaceful suburban retreats.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* First Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner4.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Modern Loft in Downtown Chicago</h3>
              <p className="mt-2 text-gray-600">
                2 beds • 2 baths • 1,500 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $1,200,000
              </p>
            </div>
          </div>

          {/* Second Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner10.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Cozy Cottage in Asheville, NC</h3>
              <p className="mt-2 text-gray-600">
                3 beds • 2 baths • 1,800 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $450,000
              </p>
            </div>
          </div>

          {/* Third Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner9.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Luxury Penthouse in Manhattan</h3>
              <p className="mt-2 text-gray-600">
                5 beds • 4 baths • 4,200 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $5,750,000
              </p>
            </div>
          </div>

          {/* Fourth Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner8.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Spacious Ranch in Dallas Suburbs</h3>
              <p className="mt-2 text-gray-600">
                4 beds • 3 baths • 2,900 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $720,000
              </p>
            </div>
          </div>

          {/* Fifth Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner6.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Charming Bungalow in Portland, OR</h3>
              <p className="mt-2 text-gray-600">
                2 beds • 1 bath • 1,200 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $350,000
              </p>
            </div>
          </div>

          {/* Sixth Property */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Luxury home"
              src="/banner5.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-700">Family Home in Scottsdale, AZ</h3>
              <p className="mt-2 text-gray-600">
                5 beds • 4 baths • 3,700 sqft
              </p>
              <p className="mt-4 text-lg font-semibold text-green-600">
                $950,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
