import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="flex justify-between contaianer mx-auto px-12 py-4">
     
      <img src={logo} alt="" />

      <ul className="flex gap-4 items-center ">
        <a className="font-bold">Home</a>
        <li className="font-bold">Technologies</li>
        <li className="font-bold">Projects</li>
        <li className="font-bold">About </li>
        <li className="font-bold">Contacts</li>
      </ul>
      <div className="flex gap-4 items-center">
        <button className="bg-[#f3eaef] hover:bg-[#d4ccd0] active:bg-[#620a36] text-black font-medium transition-colors duration-200 py-2 px-6 rounded-full">Sign In</button>
        <button className=" bg-[#d8217d] hover:bg-[#6c1c44] active:bg-[#620a36] text-white font-medium transition-colors duration-200 py-2 px-6 rounded-full">Sign up</button>
      </div>
      </div>
    </nav>
    
    
  );
};

export default Nav;
