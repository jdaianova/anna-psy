import Logo from "@/shared/ui/icons/Logo";
import HeroButtons from "./HeroButtons";

const HeroSection = () => {
  return (
    <section id="hero" className="flex-base w-full bg-primary-light">
      <div
        className='hero-box relative bg-primary-light'
      >
        {/* logo and slogan block */}
        <div className="flex flex-col justify-center items-end hero-design-line border-3 z-90
                      w-[280px] sm:w-[320px] md:w-[400px] lg:w-[600px] xl:w-[820px] 
                      pt-[5px] sm:pt-[20px] md:pt-[28px] lg:pt-[32px] xl:pt-[20px]
                      sm:pl-[20px] md:pl-[20px] lg:pl-[40px] xl:pl-[120px]
                      sm:pr-[24px] md:pr-[32px] lg:pr-[56px] xl:pr-[56px] ">

          <Logo
            className="mb-[2px] sm:mb-[10px]
                      w-[50px] sm:w-[70px] md:w-[60px] lg:w-[100px] xl:w-[130px]"
            fillText="#7D7F72"
            fillHeart="white" />

          <p
            className="slogan-font pb-10 text-[black] text-right
                        text-[20px]  sm:text-[24px] md:text-[28px] lg:text-[43px] xl:text-5xl
                        sm:leading-[1.2] md:leading-[1.15] lg:leading-[1]"
            style={{ transform: "rotate(-0deg)" }}
          >
            Помогу начать жить той жизнью, где вам хорошо – в гармонии с собой,
            своей работой, окружением и целями.
          </p>
        </div>

        {/* photo's block */}
        <div
          className="relative flex flex-col w-full bg-cover bg-no-repeat bg-right z-0"
          style={{ backgroundImage: "url('../../../../public/images/anna.png')" }}
        >

          {/* logo for small screen
          <Logo
            className="mt-[8%] ml-[8%] block sm:hidden"
            fillHeart="rgba(255, 255, 255, 0.8)"
            fillText="#44453D"
          /> */}

          {/* vertical opacity blocks */}
          <div className="w-[32px] sm:w-[68px] md:w-[100px] h-full flex z-0">
            <div className="flex-[30] hero-design-line"></div>
            <div className="flex-[40] hero-design-line opacity-80"></div>
            <div className="flex-[30] md:flex-[27] hero-design-line opacity-60"></div>
            <div className="hidden md:flex md:flex-[15] hero-design-line opacity-50"></div>
          </div>

        </div>

        {/* bottom slogan for small screens */}
        {/* <p
          className="slogan-font text-center text-3xl px-8 pt-1 absolute bottom-[-84px] 
                    block sm:hidden bg-[rgba(255,255,255,0.5)]"
          style={{ lineHeight: 1 }}
        >
          Помогу начать жить той жизнью, где вам хорошо – в гармонии с собой,
          своей работой, окружением и целями.
        </p> */}

      </div>
      <HeroButtons />
    </section>
  );
};

export default HeroSection;
