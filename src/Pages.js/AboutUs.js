import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback:
      "InstituteHub has transformed the way we manage our activities. It's efficient and user-friendly!",
  },
  {
    name: "Mark Smith",
    feedback: "A great platform for both students and staff. Highly recommend!",
  },
  {
    name: "Sarah Davis",
    feedback:
      "The features offered are comprehensive and greatly improve communication.",
  },
];

const instituteImages = [
  "https://media.collegedekho.com/media/img/news/college_fests.jpg?height=310&width=615",
  "https://mvsrec.edu.in/images/PE/slider/a.jpg",
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Students_from_various_parts_of_1200x768.png?VersionId=yv1DMiemaEt1dVOk8xSCiP78A.vWCdpP&size=690:388",
  "https://imaginationwaffle.com/wp-content/uploads/2016/07/Workshops-in-Bangalore.jpg",
];

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold mb-4">About InstituteHub</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Revolutionizing institute management by streamlining activities and fostering communication.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition"
        >
          Learn More
        </button>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              2023: InstituteHub Launch
            </h3>
            <p className="text-gray-600">
              Our platform was launched to simplify and enhance institute
              management, providing tools for better communication and resource
              allocation.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              2024: Major Feature Updates
            </h3>
            <p className="text-gray-600">
              We introduced features like event management and resource
              allocation to help institutes operate smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institute Highlights Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Institute Highlights
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...sliderSettings}>
            {instituteImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Highlight ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Affiliated, Anti-Ragging, and Placements Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        InstituteHub at a Glance
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Affiliated Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 max-w-xs w-full">
            <div className="mb-4">
              <img
                src="https://st3.depositphotos.com/4285885/17211/i/450/depositphotos_172119100-stock-photo-affiliate-text-written-on-cyan.jpg" // Add your image here
                alt="Affiliated Institutes"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Affiliated Institutes
            </h3>
            <p className="text-gray-600">
            Our institute is affiliated with leading universities and institutions, ensuring that our students receive top-tier education. We have strong ties with universities such as XYZ University, ABC University, and National Institute of Technology (NIT), and our courses are accredited by esteemed bodies like the AICTE. We are also recognized by the University Grants Commission (UGC), which guarantees the quality and standards of education offered to our students.
</p>
          </div>
          {/* Anti-Ragging Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 max-w-xs w-full">
            <div className="mb-4">
              <img
                src="https://i0.wp.com/specudupi.ac.in/wp-content/uploads/2021/11/no-to-ragging.jpg?fit=802%2C602&ssl=1" // Add your image here
                alt="Anti-Ragging Measures"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Anti-Ragging Measures
            </h3>
            <p className="text-gray-600">
            At our institution, we believe in creating a safe and supportive environment for every student. We have a zero-tolerance policy toward ragging and bullying. Our campus fosters respect, kindness, and camaraderie, where senior students act as mentors to the newcomers. The management and student body work together to promote harmony, and we provide a structured system for reporting and dealing with any issues, ensuring a safe learning space for everyone.
</p>
          </div>
          {/* Placements Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 max-w-xs w-full">
            <div className="mb-4">
              <img
                src="https://dimages2.corriereobjects.it/files/main_image_mobile/uploads/2024/10/18/67122148d05a7.jpeg" // Add your image here
                alt="Placement Support"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Placement Support
            </h3>
            <p className="text-gray-600">
            Our institute has a stellar track record of placements, with students securing positions in leading national and international companies across various sectors. With strong industry connections, dedicated placement support, and training programs, our students are well-prepared to take on the professional world. Our alumni have gone on to excel in top MNCs, startups, and research institutions, making us a preferred choice for recruiters in the region.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What People Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all max-w-sm w-full"
            >
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold text-blue-700">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Sign Up for Our Events</h2>
            <p className="mb-4">
              Stay updated with our latest activities and events.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="border p-2 rounded mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Close
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
