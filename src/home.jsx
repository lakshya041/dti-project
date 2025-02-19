



const Home = () => {
  function tologin(){
    window.location.href = "http://localhost:5173/login"
  
  }
  return (
    <div className="bg-[#3a2a25] min-h-screen flex justify-center">
      <div className="bg-white w-full pl-3 pr-3  overflow-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-3 ">
          <h1 className="text-xl font-bold text-orange-600">JUST EMPLOYED.</h1>
          <ul className="flex gap-6 text-sm">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-500 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </ul>
          <div className="   flex justify-center gap-[20px] rounded">
  <button  onClick={tologin} className="border cursor-pointer border-orange-500 text-orange-500  px-4 py-2 rounded w-25 hover:bg-gray-200 transition">
    Join Now
  </button>
  <button onClick={tologin} className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded w-25 hover:bg-orange-600 transition">
    Sign in
  </button>
</div>

        </nav>

        {/* Hero Section */}
        <div 
          className="relative w-full h-156 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/5.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
          <h2 className="text-4xl font-bold flex flex-col">
           CONNECTIONG PROFESSIONALS,<span>INSPIRING PROGRESS</span>
</h2>

            <button className="mt-4 bg-white text-black px-4 py-2 rounded w-40 hover:bg-gray-200 transition">
              Explore All  ➚
            </button>
          </div>
        </div>


        {/* Featured Sections */}
        <div className="grid grid-cols-2 gap-4 p-6 h-90">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold">HIGH-END </h3>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Join Now</button>
          </div>
          <div className="bg-yellow-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold">new container</h3>
            <p className="text-sm"></p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">log in </button>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center py-10 px-6">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center max-w-xs text-center border-2 rounded-md border-transparent shadow-lg p-4">
              <img src="../1.png" alt="Talent Pool" className="w-12 h-12 mb-3" />
              <p>Access a pool of top talent across 700 categories</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center border-2 rounded-md border-transparent shadow-lg p-4">
              <img src="../2.png" alt="Matching" className="w-12 h-12 mb-3" />
              <p>Enjoy a simple, easy-to-use matching experience</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center border-2 rounded-md border-transparent shadow-lg p-4">
              <img src="../3.png" alt="Quality Work" className="w-12 h-12 mb-3" />
              <p>Get quality work done quickly and within budget</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center border-2 rounded-md border-transparent shadow-lg p-4">
              <img src="../4.png" alt="Payment" className="w-12 h-12 mb-3" />
              <p>Only pay when you're happy</p>
            </div>
          </div>
        </div>

        {/*vague section*/}
        <div className="relative w-full h-106 bg-cover bg-center rounded-lg bg-[#fff6f1]" >

        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 py-10">
          <h2 className="text-3xl font-semibold text-center mb-6 ">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-6 px-6">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="italic">"Amazing products! The quality is outstanding and delivery was super fast!"</p>
              <p className="text-right font-bold mt-4">- John Doe</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="italic">"Highly recommend! The gear is perfect for my hunting trips."</p>
              <p className="text-right font-bold mt-4">- Jane Smith</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-6">
          <p>&copy; 2025 Just Employed. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default Home;








//Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759) & Freelancer Online India Private Limited (CIN U93000HR2011FTC043854)Copyright © 2025 Freelancer Technology Pty Limited (ACN 142 189 759)