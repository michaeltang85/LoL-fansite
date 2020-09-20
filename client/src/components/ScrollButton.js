import React, {useState} from 'react';
import {BsFileArrowUp, BsLayoutTextWindowReverse} from 'react-icons/bs';
import '../App.css';

const ScrollButton = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScroll = () => {
        if (!showScroll && window.pageYOffset > 300){
            setShowScroll(true)
        }
        else if (showScroll && window.pageYOffset <= 300){
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', checkScroll)

    return(
        <BsFileArrowUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} />
    );
}


export default ScrollButton;