import { Link } from 'react-router-dom';
import React, { useRef } from "react";
import useModal from "./useModal";
import Modal from "./modal";
import './nav.css'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import {AiOutlineHome} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {FaCompass} from 'react-icons/fa';
import {RiHeartsFill} from 'react-icons/ri';
import {IoCreateOutline} from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiSquare} from 'react-icons/bi';


function Nav() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();

  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    console.log(event.target.files);
    // Do something with the files that were dropped or selected
  };

  const { collapseSidebar } = useProSidebar();

  return (


    <nav>
      <div className="App">

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          
        >
          <div className='modal-title'>
            <h4>Create New Post </h4>         
          </div>

          {/* Drag photos and vedios from the computer */}
          <div className='modal-body_text'>
            <p>Drag photos and videos from the computer</p>
            <button onClick={handleClick}>Select Files</button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  multiple
                />
          </div>
        
        </Modal>

      </div>

<div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu className='app-nav_menu'>
          <MenuItem>
          <Link className="text-dark no-underline MenuItem" to="/">
            <h2 className="">
            <AiOutlineHome /> Home
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/search">
            <h2 className="my-2">
            <FaSearch /> Search
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/explore">
            <h2 className="my-2">
            <FaCompass /> Explore
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/playdates">
            <h2 className="my-2">
            <RiHeartsFill /> Play Dates
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/create" onClick={toggleLoginForm}>
            <h2 className="my-2">
            <IoCreateOutline /> Create
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/profiles">
            <h2 className="my-2">
            <CgProfile /> Profiles
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/marketplace">
            <h2 className="my-2">
            <AiOutlineShoppingCart /> Marketplace
            </h2>
          </Link>
          </MenuItem>

          <MenuItem>
          <Link className="text-dark no-underline" to="/adoptions">
            <h2 className="my-2">
            <BiSquare /> Adoptions
            </h2>
          </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>

    <div className="line">
      </div>

    </nav>
  );
};

export default Nav;