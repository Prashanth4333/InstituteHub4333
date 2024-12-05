import React from 'react';

const NewsEvents = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Latest News & Events
        </h2>
        <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings at InstituteHub. From
          groundbreaking research to exciting events, explore what's new in our
          community.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event 1 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRH7LVuwEEbH7gNhdFa4BRwwt3QRnVybGdQ&s"
              alt="Annual Tech Fest"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                Annual Tech Fest
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Join us for an exciting day of workshops, tech talks, and
                competitions.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>

          {/* Event 2 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://www.mcw.edu/-/media/MCW/Newsroom/Article-Photos/New-Cancer-Center-Building-Rendering-2022.jpg"
              alt="New Research Center"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                New Research Center
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Our new research center focuses on innovation and technology.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>

          {/* Event 3 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://st.depositphotos.com/1705243/1376/i/450/depositphotos_13765610-stock-photo-webinar-word-cloud.jpg"
              alt="Upcoming Webinar"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                Upcoming Webinar
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Don't miss our webinar on AI and its future implications.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>

          {/* Event 4 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/campusfeed/2777661_1718717461sNO2H8.jpg"
              alt="Alumni Meet"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                Alumni Meet 2024
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Reconnect with fellow alumni and network with industry
                professionals.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>

          {/* Event 5 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://media.insider.in/image/upload/c_crop,g_custom/v1726738579/mxcw0ggtmklptwbvennb.jpg"
              alt="Data Science Workshop"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                Data Science Workshop
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                A hands-on workshop on data science and machine learning
                fundamentals.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>

          {/* Event 6 */}
          <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <img
              src="https://axiscolleges.org/wp-content/uploads/2023/12/5TH-Conference-.webp"
              alt="International AI Conference"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                International AI Conference
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                An international conference featuring keynotes from AI pioneers.
              </p>
              <span className="inline-block mt-4 text-blue-500 font-semibold cursor-pointer">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
