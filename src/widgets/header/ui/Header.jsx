import NavMenu from '@/entities/header/ui/NavMenu';
import SocialBlock from './SocialBlock';

const Header = () => {
  return (
    <header className="fixed top-0 flex justify-center w-full
                       bg-secondary-dark shadow-sm z-50">

      <div className="flex w-[80%] max-w-[1200px] justify-between items-center h-[50px]">
        <NavMenu />
        <SocialBlock />
      </div>
    </header>
  );
};

export default Header;
