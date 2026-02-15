import Profile from '../assets/profile.png';
import Logo from '../assets/logo.png';
import Blogify from '../assets/Blogify.png';
import Portfolio from '../assets/Portfolio.png';
import hndMovies from '../assets/hndMovies.png';
import Crypto_Tracker from '../assets/Crypto_Tracker.png';
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from 'react-icons/fa6';

export const Personal = {
  Profile: Profile,
  Logo: Logo,
  Resume: '/Ahmad_Resume.pdf'
};

export const Experience = [
  {
    id: 1,
    numbers: '0',
    label1: "years of",
    label2: 'experience'
  },
  {
    id: 2,
    numbers: '+3',
    label1: "Projects",
    label2:'Completed'
  }
]


export const Skill = [
  {
    id: 1,
    icon: <FaHtml5 style={{ color: 'rgb(227, 79, 38)', fontSize: '2rem' }} />,
    title: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    level: 'Expert'
  },
  {
    id: 2,
    icon: <FaCss3 style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />,
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    level: 'Expert'
  },
  {
    id: 3,
    icon: <IoLogoJavascript style={{ color: 'rgb(240, 219, 79)', fontSize: '2rem' }} />,
    title: 'JAVASCRIPT',
    description: 'JavaScript enables interactive features on websites.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    level: 'Advanced'
  },
  {
    id: 4,
    icon: <RiTailwindCssFill style={{ color: 'rgb(56, 189, 248)', fontSize: '2rem' }} />,
    title: 'TAILWINDCSS',
    description: 'TailwindCSS is a utility-first CSS framework.',
    link: 'https://tailwindcss.com/docs',
    level: 'Expert'
  },
  {
    id: 5,
    icon: <RiReactjsFill style={{ color: 'rgb(97, 218, 251)', fontSize: '2rem' }} />,
    title: 'REACT JS',
    description: 'ReactJS is a JavaScript library for building user interfaces.',
    link: 'https://react.dev/',
    level: 'Advanced'
  },
];


export const Project = [
  {
    id: 1,
    image: Crypto_Tracker,
    title: 'Crpto Tracker',
    description: 'A real-time crypto monitoring web app that displays live prices, trends, and market data using APIs, featuring interactive charts and portfolio management for informed trading decisions.',
    code: 'https://github.com/AhmadJaved2112/Crypto_Tracker',
    demo: 'https://crypto-tracker-ruby-seven.vercel.app/'
  },
  {
    id: 2,
    image: Blogify,
    title: 'Blogify',
    description: 'A modern blog featuring insightful articles on technology, productivity, development, design, and lifestyle',
    code: 'https://github.com/AhmadJaved2112/Blogify',
    demo: 'https://blogify-eta-eight.vercel.app'
  },
  {
    id: 3,
    image: Portfolio,
    title: 'Portfolio',
    description: 'A sleek, responsive digital showcase of my skills and projects, built with modern web technologies to highlight my expertise in frontend development with clean design and optimal performance.',
    code: 'https://github.com/AhmadJaved2112/myPortfolio',
    demo: 'https://my-portfolio-nine-ivory-43.vercel.app/'
  },
  {
    id: 4,
    image: hndMovies,
    title: 'Hnd Movies',
    description: 'A feature-rich movie discovery platform that lets users explore trending, popular, and top-rated films. Built with React and TMDB API, featuring search functionality, movie details, and responsive design for seamless browsing.',
    code: 'https://github.com/AhmadJaved2112/hnd-movies',
    demo: 'https://hnd-movies.vercel.app/'
  },
]


export const Blog = [
  {
    id: 1,
    title: 'JavaScript Array Methods',
    description: 'Explore essential JavaScript array methods that every web developer should master. This guide covers map, filter, reduce, and more with practical examples.',
    link: 'https://medium.com/@code30a/every-web-developer-should-know-these-javascript-array-methods-e383af10f40f'
  },
  {
    id: 2,
    title: 'Automate Vite + Tailwind Setup',
    description: 'Learn how to streamline your development process by automating the creation of Vite React applications with Tailwind CSS and a dynamic folder structure.',
    link: 'https://medium.com/@code30a/how-to-automate-vite-react-app-creation-with-tailwind-css-and-dynamic-folder-setup-01b32afe2022'
  },
  {
    id: 3,
    title: 'Top Web Dev Interview Repos',
    description: 'Discover the best all-in-one repositories for web development interviews in 2025. This article compiles essential resources, including coding challenges, system design questions.',
    link: 'https://www.linkedin.com/posts/amine-mohamed-5a914a23a_webdevelopment-frontend-backend-activity-7338944368428429312-yiiP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt3NtEBYPYKqx0vXyRpaenWuMKcm9gAm30'
  },
]


export const Location = [
  {
    id: 1,
    icon: <FaLocationDot />,
    label: 'Address',
    place: 'Model Town B, Street No 9, near Sada-e-Pakistan, House # 179A'
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    label: 'Email',
    place: 'ahmadjaved2112sgc@gmail.com'
  },
  {
    id: 3,
    icon: <IoIosCall />,
    label: 'Phone',
    place: '+92 323 8305118'
  },
]