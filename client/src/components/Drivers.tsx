import React from 'react'
import '../styles/About.css'
import { motion } from 'framer-motion'
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

export const Drivers = () => {
    return (
        <motion.div className="About-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="card">
                <h1>Drivers</h1>
                <p>Under construction. The Idea is to have cards display the Drivers and relevant data about each individual</p>
            </div>
        </motion.div>
    )
}
