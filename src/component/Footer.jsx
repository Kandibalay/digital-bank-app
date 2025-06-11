import React from "react";

function Footer() {
  return (
    <footer className="flex flex-row justify-between w-full bg-black items-center md:items-baseline text-gray-400 p-10 md:flex-row">
      <div className="md:flex md:flex-col md:place-items-baseline text-left">
        <img src="/img/logo.svg" alt="logo image" />
      </div>
      <div className="md:flexs-baseline text-center" md:flex-col md:place-item>
        
          <h4 className="font-semibold mb-2"><a href="">About Us</a></h4>
          <h4> Contact</h4>
          <h4>Blog</h4>
        
 <div className="md:flexs-baseline text-center text-gray-400" md:flex-col md:place-item>
  
          <h4>Careers</h4>
          <h4>Supports</h4>
          <h4>Privacy Policy</h4>
        
 </div>
 <div>
  <button className="bg-green-500 text-white rounded-full">Request Invite</button>
  <p></p>
 </div>
        
      </div>
    </footer>
    
  );
}

export default Footer;
