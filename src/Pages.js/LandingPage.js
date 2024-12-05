import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import company logos
import wiproLogo from '../assets/logos/wipro.png';
import accentureLogo from '../assets/logos/accenture.png';
import cognizantLogo from '../assets/logos/cognizant.png';
import zitharaLogo from '../assets/logos/zithara.png';
import googleLogo from '../assets/logos/google.png';
import amazonLogo from '../assets/logos/amazon.png';
import hclLogo from '../assets/logos/hcl.png';
import tcsLogo from '../assets/logos/tcs.png';
import deloitteLogo from '../assets/logos/deloitte.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-500 text-white text-center py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://www.example.com/college-background.jpg')",
          }}
        ></div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
          Welcome to <span className="text-yellow-400">InstituteHub</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in">
          Your gateway to transforming educational management and empowering
          future leaders.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-110 transition duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Companies Section */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 animate-fade-in">
          Top Recruiters From Our Campus
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Proud to collaborate with leading companies that recognize and recruit our talent.
        </p>
        <div className="mx-auto max-w-screen-xl px-4">
          <Slider
            {...sliderSettings}
            className="space-x-6 sm:space-x-2 md:space-x-4 lg:space-x-6"
          >
            {[wiproLogo, accentureLogo, cognizantLogo, zitharaLogo, googleLogo, amazonLogo, hclLogo, tcsLogo, deloitteLogo].map((logo, index) => (
              <div
                key={index}
                className="flex justify-center px-2 sm:px-1 md:px-3 lg:px-4"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-20 w-20 sm:h-16 sm:w-16 md:h-24 md:w-24 rounded-full shadow-lg object-cover hover:scale-110 hover:shadow-xl hover:shadow-blue-400 transition-transform duration-500"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-lg font-semibold">Connect with us</p>
          <div className="flex justify-center space-x-6 text-2xl">
            
          </div>
          <p className="text-sm">© {new Date().getFullYear()} InstituteHub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
