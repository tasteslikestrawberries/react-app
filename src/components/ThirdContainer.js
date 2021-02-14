import React from "react";
import kneel from './assets/kneel.png';



class ThirdContainer extends React.Component {
 
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.406
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
                 <h3>Third Container</h3>
                 <img className="lazyload" data-src={kneel} alt="" width="800" height="700"></img>
            <div className='content3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.
           
    

            </div>
            
          

            
      
            <hr/>
        
            

            

            </div>
        ); 
    }
}

export default ThirdContainer 