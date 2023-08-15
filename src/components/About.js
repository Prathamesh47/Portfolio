import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div id='about' className='  py-8 items-center mx-40 justify-center'>
      <div className='container mx-auto py-4  '></div>
          <h2 className=' text-center text-white text-2xl font-bold   p-10'>About Me</h2>
          <p className='text-white mb-4 px-12 text-md text-justify '>I'm Prathamesh, a passionate web developer and student.
          I love creating stunning websites using new technologies. Exploring new tech in the programming
           world is my constantpersuit. I enjoy bringing my ideas to life through codind and building innovative 
           projects.<br></br><br></br>
           Originally from Wani,a town in Yavatmal District in Maharashtra, I completed my schooling at Swarnleela International School Wani.
           After that I persued secondary education in Decent Junior College at Nagpur.Currently I am persuing my BE in Information Technology 
           at Pune Institute of Computer Technology.
           <br></br><br></br>Feel free to connect with me on social media-I'm always eagar to hear from fellow developers and enthusiasts!</p>

           <div className="flex items-center my-3 gap-10 mb-4 px-12">
                            <Link
                                to={'https://www.instagram.com/'}
                                className='cursor-pointer'>
                                <FaInstagram className='text-2xl  cursor-pointer text-pink-600 opacity-70 ' />
                            </Link>
                            <Link
                                to={' https://twitter.com/@pratham03d'}
                                className='cursor-pointer'>
                                <FaTwitter className='text-2xl  cursor-pointer text-sky-500 opacity-70 ' />
                            </Link>
                            <Link
                                to={'https://www.linkedin.com/in/prathamesh-dikondawar-0a743a22a/'}
                                className='cursor-pointer'>
                                <FaLinkedin className='text-2xl  cursor-pointer text-blue-800 opacity-70 ' />
                            </Link>
                            <Link
                                to={'https://wa.me/919657830169'}
                                className='cursor-pointer'>
                                <FaWhatsapp className='text-2xl  cursor-pointer text-green-700 opacity-70 ' />
                            </Link>
                            </div>
    </div>
  );
};

export default About;
