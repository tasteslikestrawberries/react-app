import React from "react";
import bubbles from './assets/bubbles.png'




class FirstContainer extends React.Component {

 
        componentDidMount() {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.406
            }
    
            const callback = (entries) => {
                const span = document.getElementById("taste");
              
                // if firstcontainer is intersecting info then add background color 
                if (entries[0].isIntersecting) {
                    span.style.color = "rgb(168, 38, 255";
                }
                // if firstcontainer is not intersecting then remove background color
                if (!entries[0].isIntersecting ) {
                    span.style.color = "unset";
                }
            }
                
            let observer = new IntersectionObserver(callback, options);
            const firstContainer = document.getElementsByClassName("firstContainer")[0]; //getElementsByClassName returns an array
    
            observer.observe(firstContainer);         
        }
    


    render() {
        return (
            <div className='firstContainer'>
              
              <h1><span>First</span><br/>Container</h1>
            
            <div className='content1'>
               
           
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.  Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua.
             <br/><br/>
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.  Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua.

           <img className="lazyload" data-src={bubbles} alt="lazyload" width="450" height="600"></img>
         
            </div>

    
         
            </div>
           
      
  

        ); 
    }
}

export default FirstContainer 











