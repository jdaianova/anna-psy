const Header = () => {
    return (
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Psy Balance</div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">Обо мне</a>
            <a href="#services" className="hover:text-blue-600">Услуги</a>
            <a href="#contact" className="hover:text-blue-600">Контакты</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  