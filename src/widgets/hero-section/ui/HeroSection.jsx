import Logo from "@/shared/ui/icons/Logo";
import HeroButtons from "./HeroButtons";

const HeroSection = () => {
  return (
    <section  id="hero" className="flex-base w-full bg-primary-light">
      <div
        className={`
        relative flex max-w-[1280px] bg-primary-light w-full
        min-h-[55vw] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]
        pt-[47px] sm:pt-[52px] md:pt-[57px] lg:pt-[52px] px-[60px]
        `}
      >
        {/* logo and slogan block */}
        <div className=" flex-col justify-center items-end hero-design-box border-3
                      w-[50%] hidden md:flex z-90 pl-[5%] pr-[45px] pt-[10px]">

          <Logo className="mb-[10px]" widthHeart ={130} fillText="#7D7F72" fillHeart="white" />

          <p
            className="slogan-font text-xl md:text-3xl lg:text-5xl pb-10 text-[black] text-right"
            style={{ transform: "rotate(-0deg)" }}
          >
            Помогу начать жить той жизнью, где вам хорошо – в гармонии с собой,
            своей работой, окружением и целями.
          </p>
        </div>

        {/* photo's block */}
        <div
          className="relative flex flex-col w-full bg-cover bg-no-repeat bg-right z-0"
          style={{ backgroundImage: "url('/images/anna.png')" }}
        >

          {/* top diagonal accent */}
          {/* <div
          className="absolute right-0 z-20 w-screen h-[15px] sm:h-[30px] bg-gradient-secondary slide-in-left"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)',
            transform: 'translateX(-100%)',
            animation: 'slide-in-left 0.6s ease-out forwards',
          }}
        /> */}

          {/* logo for small screen */}
          <Logo
            className="mt-[8%] ml-[8%] block md:hidden"
            widthHeart="22%"
            fillHeart="rgba(255, 255, 255, 0.8)"
            fillText="#44453D"
          />

          {/* vertical opacity blocks */}
          <div className="flex w-[100px] h-[100%] hidden md:flex z-0">
            <div className="flex-[22] hero-design-box"></div>
            <div className="flex-[36] hero-design-box opacity-90"></div>
            <div className="flex-[27] hero-design-box opacity-70"></div>
            <div className="flex-[15] hero-design-box opacity-50"></div>
          </div>
        </div>

        {/* bottom diagonal accent */}
        {/* <div
        className="absolute bottom-[-6px] left-0 w-screen h-[30px] bg-[#7D7F72] slide-in-right"
        style={{
          clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div> */}

        {/* bottom slogan for small screens */}
        <p
          className="slogan-font text-center text-3xl px-8 pt-1 absolute bottom-[-84px] block md:hidden bg-[rgba(255,255,255,0.5)]"
          style={{ lineHeight: 1 }}
        >
          Помогу начать жить той жизнью, где вам хорошо – в гармонии с собой,
          своей работой, окружением и целями.
        </p>

      </div>
      <HeroButtons />
    </section>
  );
};

export default HeroSection;
