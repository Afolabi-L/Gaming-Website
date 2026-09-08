import logo from '../assets/img/logo.png';

function Header() {
    return (
      <div className="font-arial-helvetica text-white flex flex-col items-center relative mb-4">
            <header className="absolute top-0 left-0 right-0 h-20 flex items-center justify-around px-7.5 py-2.5 z-999 bg-header backdrop-blur-md">
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-10 h-10 mr-5" />
                <button className=" px-5 py-2.5 rounded-xl  font-bold text-sm cursor-pointer bg-stone-200 text-black transition duration-300 ease-in-out hover:opacity-70">
                Products
                </button>
            </div>

            <div className="flex gap-5">
                <p>
                <a href="#" className="pl-6.5  text-sm">
                    NEXUS
                </a>
                </p>
                <p>
                <a href="#" className="pl-6.5 text-sm">
                    VAULT
                </a>
                </p>
                <p>
                <a href="#" className="pl-6.5 text-sm">
                    ABOUT
                </a>
                </p>
                <p>
                <a href="#" className="pl-6.5 text-sm">
                    SERVICES
                </a>
                </p>
                <p>
                <a href="#" className="pl-6.5 text-sm">
                    CONTANT
                </a>
                </p>
            </div>
            </header>
      </div>
    );
}

export default Header