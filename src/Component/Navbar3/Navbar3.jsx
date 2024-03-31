import React from 'react'
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiApc, GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import logo from './IMG-20240223-WA0022-removebg-preview.png'



const Navbar3 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Container state={isNavOpen ? 1 : 0}>
      <div className="brand">
        {/* <h3 style={{color:"orange",fontWeight:"700"}}>AL REHMAN GARDEN</h3> */}
        <img src={logo} alt="" />

      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="#offer">Projects</a>
          </li>
          {/* <li>
                                                            <a href="dash">Dashboard</a>
                                                  </li> */}

          <li>
            <a href="Contact">Contact</a>
          </li>
         
          <button className="btn " style={{ background: "rgb(167,12,24)", color: "white" }}>Schedule a visit</button>
        </ul>
      </div>
      <div className="account-info">
        {/* <button className="btn info"></button> */}

      </div>
    </Container>
  )
}
const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16vh;
  background:black;
  /* box-shadow: 10px 10px 5px black; */

  .brand {
    img {
      cursor: pointer;
      width: 80%;
      height: 17vh;
      margin-left:30px;
    }
  }
  .toggle {
    display: none;
    color:white;
  }
  .links {
    ul {
      display: flex;
      gap: 3.5rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: white;
          font-weight:700;
          /* cursor: pointer; */
          font-size:20px;
          /* transition: var(--default-transition); */
          &:hover {
            background: rgb(167,12,24);
            padding:8px;
          /* margin: 25; */
            gap: 3.5rem;
          }
        }
      }
    }
  }
  .account-info {
  background-color:orange;
    display: flex;
    gap: 1rem;
    margin-left: -300px;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  @media  (max-width: 1080px){
    .brand img{ 
      width:80px;

    }
    


  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      height: 19vh;
      margin-left:-30px;
    }
    
    .toggle {
      padding-right: 1rem;
      width: 30px;
      display: block;
      z-index: 1;
     

    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "50%" : "0%")};
      height: 100vh;
      background-color:rgb(21, 21, 21);
      opacity: 0;
      
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
            font-size:19px;
          }
        }
      }
    }
  }
`;


export default Navbar3