import React from 'react'
import '../styles/Home.css'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
const containerVariants = {
    hidden: {
        opacity: 0,
        y: '-100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut', 
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            ease: 'easeInOut'
        }
    }
}
const linkVariants = {
    hover: {
        scale: 1.3,
        textShadow: "0px 0px 8px rgb(255,255,255)",
       
       
    }
}


export const Home = () => {

    return (
        <motion.div className="Home-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <nav >
                <ul className="Home-nav">
                    <motion.li
                    variants={linkVariants}
                    whileHover="hover"
                    > <Link className="Home-Link" to='/about'>About</Link> </motion.li>
                    <motion.li
                    variants={linkVariants}
                    whileHover="hover"
                    ><Link className="Home-Link" to='/circuits'>Circuits</Link> </motion.li>
                    <motion.li
                    variants={linkVariants}
                    whileHover="hover"
                    >  <Link className="Home-Link" to='/teams'>Teams</Link> </motion.li>
                    <motion.li
                    variants={linkVariants}
                    whileHover="hover"
                    > <Link className="Home-Link" to='/drivers'>Drivers</Link></motion.li>
                </ul>
               
                
              
                
            </nav>
        </motion.div>
    )
}
