import React from 'react';

const Section5 = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text and CTA */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Ready to Find Your Dream Home?</h2>
            <p className="mt-4 text-lg text-gray-600">
              At [Your Company], we are committed to making your home search as seamless as possible. Whether you're a first-time buyer or looking to upgrade, our team of experts is here to guide you. Let’s start the journey toward your perfect property.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Contact us today, and one of our real estate professionals will help you navigate the market and find the ideal place for you and your family.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-semibold border border-orange-600 text-orange-600 bg-transparent rounded-md hover:bg-orange-50">
              Get in Touch
            </button>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Get a Free Consultation</h3>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-600" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-600" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-600" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
