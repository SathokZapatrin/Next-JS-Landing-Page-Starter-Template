import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  return (
    <span className="inline-flex items-center">
      <Image src="/I_arey_uda.png" alt="Logo" width={150} height={150} />
    </span>
  );
};

export { Logo };
