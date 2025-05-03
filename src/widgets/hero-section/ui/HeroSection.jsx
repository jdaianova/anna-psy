import Logo from "@/shared/ui/icons/Logo";
import anna from "../../../../public/images/anna.png";

const HeroSection = () => {
  return (
    <section id="hero" className="section bg-primary-light">

      <div className="flex flex-row justify-center w-full max-w-[1200px] pt-[49px] hero-box-h">

        {/* logo and slogan block */}
        <div className="flex flex-col flex-[1.5] justify-center items-end hero-design-line z-90 pl-[40px]
                        pr-[28px] md:pr-[32px] lg:pr-[40px] xl:pr-[56px] ">

          <Logo
            className="mb-[10px] md:mb-[20px] 
                       w-[50px] mPhone:w-[60px] sm:!w-[80px] lg:!w-[100px] xl:!w-[130px]"
            fillText="#7D7F72"
            fillHeart="white" />

          <p
            className="slogan-font text-[black] text-right hidden sm:block
                        text-[24px] md:text-[28px] lg:text-[43px] xl:text-5xl
                        leading-[1.1] md:leading-[1.15] lg:leading-[1]">
            Помогу начать жить той жизнью, где вам хорошо – в гармонии с собой,
            своей работой, окружением и целями.
          </p>

          <p className="slogan-font text-right sm:hidden leading-[0.8]
                        text-[8vw] ">
            Помогу найти себя.
          </p>

        </div>

        {/* photo's block */}
        <div
          className="flex flex-[4] z-0 bg-[right_-36px_center] md:bg-[right_center]"
          style={{
            backgroundImage: `url(${anna})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
          }}>

          {/* vertical opacity blocks */}
          <div className="w-[36px] flex sm:w-[68px] md:w-[100px] h-full z-0">
            <div className="flex-[30] hero-design-line max-[500px]:hidden"></div>
            <div className="flex-[40] hero-design-line opacity-80"></div>
            <div className="flex-[30] hero-design-line opacity-60"></div>
            <div className="flex-[15] hero-design-line opacity-50"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
