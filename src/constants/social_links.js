import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const data = [
  {
    id: 1,
    icon: <AiOutlineMail className="social-icon"></AiOutlineMail>,
    url: 'mailto:stanley.s.lee@gmail.com',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/stanlee-cs/',
  },
  {
    id: 3,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/stanlee.cs',
  },
  // {
  //   id: 3,
  //   icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
  //   url: 'https://www.twitter.com',
  // },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: 'https://www.twitter.com',
  // },
  // {
  //   id: 5,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: 'https://www.twitter.com',
  // },
];

export default data;
