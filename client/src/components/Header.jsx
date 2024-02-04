import React from 'react'
import { Navbar, TextInput, Button } from 'flowbite-react'
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from "react-icons/fa"
import { useLocation } from 'react-router-dom'

const Header = () => {

  const path = useLocation().pathname
  console.log(path)
  return (
    <Navbar className="border-b-2">
    <Link to="/" className=" self-center text-sm sm:text-xl font-semibold dark:text-white">
    <span className="px-2 py-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl">4 Friends Blog</span>
    Adda
    </Link>
    <form>
    <TextInput type="text" placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
    </form>
    <Button className="w-12 h-10 lg:hidden" color="gray"  pill>
    <AiOutlineSearch/>
    </Button>
    <div className="flex gap-2 md:order-2">
    <Button className="w-12 h-10 hidden lg:inline" color="gray" pill>
    <FaMoon/>
    </Button>
    <Link to="/signin">
    <Button gradientDuoTone="purpleToBlue">
    Sign In
    </Button>
    </Link>
    <Navbar.Toggle/>
    </div>
    <Navbar.Collapse>
    <Navbar.Link as={"div"}>
    <Link to="/">
    Home
    </Link>
    </Navbar.Link>
    <Navbar.Link as={"div"}>
    <Link to="/about">
    About
    </Link>
    </Navbar.Link>
    <Navbar.Link as={"div"}>
    <Link to="/projects">
    Projects
    </Link>
    </Navbar.Link>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
