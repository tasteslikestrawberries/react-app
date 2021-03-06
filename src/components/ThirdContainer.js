import React from "react";
import kneel from './assets/kneel.png';



class ThirdContainer extends React.Component {
 
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const callback = (entries) => {
            const span = document.getElementById("taste");
          
            // if thirdcontainer is intersecting info then add background color 
            if (entries[0].isIntersecting) {
                span.style.color = "rgb(168, 38, 255";
            }
            // if third container is not intersecting then remove background color
            if (!entries[0].isIntersecting ) {
                span.style.color = "unset";
            }
        }
            
        let observer = new IntersectionObserver(callback, options);
        const thirdContainer = document.getElementsByClassName("thirdContainer")[0]; //getElementsByClassName returns an array

        observer.observe(thirdContainer);         
    }

    render() {
        return (
            <div className='thirdContainer'>
                    
                     <img className="lazyload" data-src={kneel} alt="" width="800" height="700"></img>
                <div className='content3'>
                     <br/><br/>
                     <br/>
                     <hr/>
                     Theme: Machine Man<br/><br/>
                     Inspired by: Detroit Becomes Human <br/><br/>
                     Made by: Anja ♡ 2021.<br/><br/>
                     Code practice: React
                     
           
    
                </div>
    

            </div>
        ); 
    }
}

export default ThirdContainer 
