import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed absolute top-0 left-0 right-0 z-50 flex h-[60px] items-center bg-black px-4 shadow-md">
      <div className="flex">
        <Link to="/">
          <img
            src="/logo.jpeg"
            alt="Moxie Daily Logo"
            className="mx-auto  -ml-2 max-h-[80px]  max-w-xs p-3 sm:h-16 md:h-20"
          />
        </Link>
      </div>
    </nav>
  );
};
