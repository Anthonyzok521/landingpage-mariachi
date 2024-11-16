import Image from "next/image";
import fontTitle from "~/fonts";

const Logo = () => (
  <span className={`${fontTitle.className} text-yellow-500 ml-2 self-center whitespace-nowrap text-2xl font-bold md:text-xl`}>
    <Image
      src={'/mci_logo.png'}
      alt="logo"
      width={80}
      height={80}
    />
  </span>
);

export default Logo;
