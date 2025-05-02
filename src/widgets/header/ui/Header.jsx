import NavMenu from '@/entities/header/ui/NavMenu';
import SocialBlock from './SocialBlock';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-secondary shadow-sm z-50 flex justify-center">
      <div className="flex justify-between items-center
                      h-[50px] px-[30px] sm:px-[40px] md:px-[60px] lg:px-[80px]
                      w-full xl:w-[1280px]">
        <NavMenu />
        <SocialBlock/>
      </div>
    </header>
  );
};

export default Header;
