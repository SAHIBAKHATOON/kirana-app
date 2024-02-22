import React from 'react';
import about from '../src/Asset/about.png';
import x from '../src/Asset/x_.svg';
import linkedin from '../src/Asset/in.svg'
import './About.css';
const About = () => {
  return (
    <>
    <div className='about-section'> 
        <div className='about-flex'>
       <div className='about-img'>
       <img src={about} />
       <h2>Anshul Gupta</h2>
       <p>Founder & CEO of kirana Club</p>
       <div className='icon'>
           <img src={x} />
           <img src={linkedin} />
    </div>
       </div>
        <p>While GT channel drives 80-90 percent of FMCG sales, brands are able to reach and influence only a small % of GT retailers directly. This can result in lost opportunities for brands to have more efficient distribution and deeper penetration.
   <br />
     Moreover, we have found that a kirana retailer trusts the information, ideas, tips and tricks of fellow kiranas more than the wholesalers or company sales representatives. 
<br />
      Using the above insight we have built the Kirana Club, wherein FMCG brands can partner with us to influence lakhs of kiranas directly riding on the power of community.  
<br />
 Over the last 2 years, some of the best national, regional and local brands have partnered with us and tasted success. </p>
        </div>        
   </div>


   <div className='discuss-section'>
  <div>
<h1>
Want to discuss your GT problem statement with us?
</h1>
<button className='btn'>Schedule a Demo</button>
  </div>
   </div>
    </>

    
   
 
  )
}

export default About