import Image from 'next/image';
import React from 'react';


const Section6 = () => {
  return (
    <>
      <section className='bg-yellow-50'>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-gray-700 font-bold sm:text-4xl">
              Living in Salt Lake City Neighborhoods
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover why Salt Lake City's neighborhoods are some of the most desirable places to live in the U.S. From mountain views to a growing urban lifestyle, this city offers something for everyone.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Beautiful modern home exterior"
                src="/banner7.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Salt Lake City combines the best of urban living and natural beauty. Whether you're looking for vibrant city life or quiet suburban charm, this city offers an array of neighborhoods to match any lifestyle.
                </p>

                <p>
                  From the walkable streets of Sugar House, known for its trendy eateries and parks, to the family-friendly vibe of The Avenues, there's a place for everyone here. Outdoor enthusiasts will love the easy access to ski resorts and hiking trails, while downtown dwellers enjoy an emerging tech scene and cultural hotspots.
                </p>

                <p>
                  With a strong sense of community, excellent schools, and stunning mountain backdrops, living in Salt Lake City is an experience like no other. Whether you're moving for work, family, or just a change of pace, you'll find the perfect neighborhood to call home.
                </p>
                  <button className='border p-3 px-9 border-orange-400 hover:border-gray-500'>Read More...</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
