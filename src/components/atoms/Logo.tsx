import Image from "next/image";
import fontTitle from "~/fonts";

const Logo = () => (
  <div className={`ml-2 flex justify-center items-center w-max h-full`}>
    <Image
      src={'/mci_logo.png'}
      alt="logo"
      width={50}
      height={50}
    />
  </div>
);

export default Logo;
