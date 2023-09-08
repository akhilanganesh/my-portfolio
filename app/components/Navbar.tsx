export default function Navbar({ /*currentPage*/ }) {
  return (
    <nav className="w-full top-0 fixed overflow-hidden bg-theme_offwhite border-gray-200 shadow dark:bg-theme_offwhite z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-1 md:mx-auto">
        <a href="/" className="flex items-center">
          <img src='/logo.png' alt="AG" className="w-10 m-2 md:m-0 text-theme_color1" />
          {/* <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-theme_color1">AG</span> */}
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme_color1 rounded-lg md:hidden hover:bg-theme_white focus:outline-none focus:ring-2 focus:ring-theme_white dark:text-theme_color1 dark:hover:bg-theme_white dark:focus:ring-theme_white" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open menu</span>
          {/* <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg> */}
        </button>
        <div className="hidden w-full md:block md:w-auto md:text-xl m-4" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <SNavLink name="Home" uri="" />
            <NavLink name="About" uri="about" />
            <NavLink name="Contact" uri="contact" />
          </ul>
        </div>
      </div>
    </nav>

  );
}

interface NavLinkProps {
  name: string,
  uri: string,
}

function NavLink({ name, uri }: NavLinkProps) {
  return (
    <li>
      <a href={`/${uri}`} className="block py-2 pl-3 pr-4 text-theme_color1 rounded hover:text-theme_color2 md:hover:bg-transparent md:border-0 md:hover:text-theme_color2 md:p-0 dark:text-theme_color1 md:dark:hover:text-theme_color2 dark:hover:bg-gray-700 dark:hover:text-theme_color2 md:dark:hover:bg-transparent transition duration-200 ease-in">{name}</a>
    </li>
  )
}

function SNavLink({ name, uri}: NavLinkProps) {
  return (
    <li>
      <a href={`/${uri}#`} className="block py-2 pl-3 pr-4 text-theme_color1 bg-theme_white rounded md:bg-transparent md:text-theme_color1 md:p-0 dark:text-theme_color1 md:dark:text-theme_color1 underline underline-offset-8 decoration-2" aria-current="page">{name}</a>
    </li>
  )
}