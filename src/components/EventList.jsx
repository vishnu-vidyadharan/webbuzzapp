import React,{useEffect,useState} from 'react'
import { Link } from 'react-scroll'


const EventList = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
    return (
    <div className=" fixed w-full bg-slate-600">
    
      <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>

          <div className="relative group">
            <div className=" flex items-center gap-1">
              <Link
                to="dishes"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Dishes
              </Link>
            </div>

            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Tasty
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Delicious
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>

          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Reviews
          </Link>
        </nav>
      </div>
  </div> )
}

export default EventList