import { Inbox, Phone } from 'lucide-react';

const Home = () => {
  function tologin() {
    window.location.href = "/Login"
  }
  return (
    <div className="bg-[#3a2a25] min-h-screen flex justify-center bg-opacity-90 bg-[url('data:image/svg+xml,...')] bg-fixed">
      <div className="bg-white w-full  px-8 overflow-hidden">
        <nav className="flex justify-between items-center py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <h1 className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 pl-4">
            JUST EMPLOYED.
          </h1>
          <ul className="flex gap-6 text-sm">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-500 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </ul>
          {/* Updated button styling */}
          <div className="flex justify-center gap-[20px] rounded pr-4">
            <button onClick={tologin} className="border cursor-pointer border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
              Join Now
            </button>
            <button onClick={tologin} className="bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300">
              Sign in
            </button>
          </div>
        </nav>

        <div className="my-12">
          <div
            className="relative w-full h-[600px] bg-cover bg-center rounded-lg overflow-hidden transform hover:scale-[1.01] transition-transform duration-700"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/5.jpg')" }}
          >
            <div className="absolute inset-0 flex flex-col justify-center p-12 text-white animate-fadeIn">
              <h2 className="text-5xl font-bold flex flex-col space-y-4">
                <span className="animate-slideRight">CONNECTING PROFESSIONALS,</span>
                <span className="animate-slideLeft">INSPIRING PROGRESS</span>
              </h2>
              <button className="mt-8 bg-white text-black px-8 py-3 rounded-full w-fit hover:bg-orange-500 hover:text-white transform hover:translate-x-2 transition-all duration-300">
                Explore All ➚
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold">HIGH-END</h3>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-all duration-300">
              Join Now
            </button>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold">New Container</h3>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-all duration-300">
              Log in
            </button>
          </div>
        </div>


        <div className="text-center py-20 px-8 bg-gray-50 my-16">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Updated card styling with hover effects */}
            <div className="flex flex-col items-center max-w-xs text-center rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src='https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/1.png' alt="Talent Pool" className="w-16 h-16 mb-4 hover:rotate-12 transition-transform duration-300" />
              <p className="text-lg text-gray-700">Access a pool of top talent across 700 categories</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src='https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/2.png' alt="Matching" className="w-16 h-16 mb-4 hover:rotate-12 transition-transform duration-300" />
              <p className="text-lg text-gray-700">Enjoy a simple, easy-to-use matching experience</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src='https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/3.png' alt="Quality Work" className="w-16 h-16 mb-4 hover:rotate-12 transition-transform duration-300" />
              <p className="text-lg text-gray-700">Get quality work done quickly and within budget</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src='https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/4.png' alt="Payment" className="w-16 h-16 mb-4 hover:rotate-12 transition-transform duration-300" />
              <p className="text-lg text-gray-700">Only pay when you're happy  ......</p>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 my-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-12 px-8">
            <div className="bg-white shadow-xl p-8 rounded-xl max-w-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="italic text-lg">"Amazing products! The quality is outstanding and delivery was super fast!"</p>
              <p className="text-right font-bold mt-6 text-orange-600">- John Doe</p>
            </div>
            <div className="bg-white shadow-xl p-8 rounded-xl max-w-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="italic text-lg">"Highly recommend! The gear is perfect for my hunting trips."</p>
              <p className="text-right font-bold mt-6 text-orange-600">- Jane Smith</p>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-r from-gray-900 to-black text-white flex flex-row items-start space-x-6 p-4 ">
          {/* Sidebar Navigation */}
          <nav className=" p-4 w-90 ">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                  {/* <img src="/path-to-home-icon.png" alt="Home" className="w-6 h-6" /> */}
                  <Inbox />
                  <span>Mail</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                  <Phone />
                  <span>Contact No</span>
                </a>
              </li>
              <div className='flex gap-[10px]'>

                <li>
                  <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <img src={"https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/9.png"} className='bg-white rounded-full w-[35px]' />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <img src={"https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/9.png"} className='bg-white rounded-full w-[35px]' />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <img src={"https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/9.png"} className='bg-white rounded-full w-[35px]' />
                  </a>
                </li>
              </div>
              <li>
                <div className="flex space-x-6">
                  <a href="#"><img src="https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/6.png" alt="Whatsapp" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/7.png" alt="Extra 2" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://pub-1a768972bdbc4294bdbf9615f8a28545.r2.dev/8.png" alt="Extra 3" className="w-6 h-6" /></a>
                </div>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="flex-1 container mx-auto py-10 text-center absolute px-[200px]">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="mb-4">Stay updated with the latest news and offers.</p>
            <form className="flex justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-all duration-300">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer (Separate) */}
        <footer className="text-center py-6 bg-black text-white">
          <p className="text-lg">&copy; 2025 Just Employed. All rights reserved.</p>
        </footer>


      </div>
    </div>
  );
};

export default Home;








//Just Employed ® is a registered Trademark of Just Employed Pty Limited (ACN 142 189 759) & Freelancer Online India Private Limited (CIN U93000HR2011FTC043854)Copyright © 2025 Just Employed Pty Limited (ACN 142 189 759)
//Just Employed ® is a registered Trademark of Just Employed Pty Limited (ACN 142 189 759) & Freelancer Online India Private Limited (CIN U93000HR2011FTC043854)Copyright © 2025 Just Employed Pty Limited (ACN 142 189 759)