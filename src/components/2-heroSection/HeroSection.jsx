import './heroSection.css'
import Lottie from "lottie-react";
import codingAnimation from "../../animation/Animation - 1725992508976.json"
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id='hero' className='heroSection flex'>
            <div className='leftSection'>
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}

                        src="/public/mina.jpg" className='avatar' alt="mina's image" />
                    <div className='icon-verified'></div>
                </div>
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}

                    className='title'>Passionate and amateur Frontend-ReactJS web developer...</motion.h1>
                <p className='subTitle'>I am Mina Emad, a Frontend web developer based in Cairo-Egypt, and I can use my knowledge of programming frameworks and development</p>
                <div className="icons flex">
                    <a href='https://www.instagram.com/mina_emad_55/?hl=en' target='blank' className='icon icon-instagram'></a>
                    <a href='https://github.com/Mina-Emad-20' target='blank' className='icon icon-linkedin'></a>
                    <a href='https://github.com/Mina-Emad-20' target='blank' className='icon icon-github'></a>
                </div>
            </div>
            <div className='rightSection animation'>
                <Lottie animationData={codingAnimation} />
            </div>
        </section>
    );
}

export default HeroSection
    ;
