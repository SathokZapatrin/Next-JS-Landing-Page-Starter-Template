import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  return (
    <span className="inline-flex items-center">
      <Image src="/I_arey_uda.png" alt="Logo" width={90} height={90} />
    </span>
  );
};

export { Logo };
