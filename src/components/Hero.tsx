import React from 'react';

const Hero = () => {
  return (
  <section className="md:bg-center bg-cover bg-no-repeat sm:bg-[url('/banner1.jpg')] bg-[url('/banner4.jpg')] bg-gray-700 sm:bg-gray-400 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Find your Dream <strong className='text-[#ffa000]'>Home</strong></h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Discover exceptional properties and personalized services to match your unique needs</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent border border-[#ffa000] transition hover:bg-gray-900 focus:ring-4 outline-[#ffa000]">
                Browse Listings
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>

  );
}

export default Hero;
