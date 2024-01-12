import './App.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

function App() {
  const socialIcons = [
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/company/roboten/',
    },
    { icon: <AiFillInstagram />, link: 'https://www.instagram.com/robotenhq/' },
    { icon: <FaXTwitter />, link: 'https://twitter.com/robotenhq' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/robotenhq/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/@robotenhq' },
    { icon: <FaTiktok />, link: 'https://www.tiktok.com/@robotenhq' },
  ];
  return (
    <section className="justify-items-end mt-8 mr-6">
      <p className="text-white text-end tracking-wide font-light">
        Join the community
      </p>
      <ul className="flex justify-end">
        {socialIcons.map((social, i) => {
          return (
            <a
              key={i}
              className="socialIcon"
              href={social.link}
              target="_blank"
            >
              <li>{social.icon}</li>
            </a>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
