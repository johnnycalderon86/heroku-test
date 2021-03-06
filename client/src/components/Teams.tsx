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

export const Teams = () => {
    return (
        <motion.div className="About-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="card">
                <h1>Teams</h1>
                <p>Under construction. The Idea is to have cards display the Teams and relevant data for the current season.</p>
            </div>
        </motion.div>
    )
}
