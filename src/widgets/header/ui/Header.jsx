import NavMenu from '@/entities/header/ui/NavMenu';
import SocialBlock from './SocialBlock';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-secondary shadow-sm z-50 flex justify-center">
      <div className="flex justify-between items-center 
                      h-[50px] px-[120px]
                      lg:min-w-[1280px]">
        <NavMenu />
        <SocialBlock/>
      </div>
    </header>
  );
};

export default Header;
