import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-[url('/hero-bg.png')] bg-cover bg-center h-screen flex flex-col">
    {/* Навбар сверху */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://arey-rvp.vercel.app/"></Link>
        </li>
        {/* <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    {/* Центральный блок занимает всё оставшееся пространство */}
    <Section yPadding="py-2 flex-1 flex items-center justify-center">
      <HeroOneButton
        title={
          <>
            {'УКРАЇНСЬКА ДОБРОВОЛЬЧА АРМІЯ\n'}
            <span className="text-primary-500 text-7xl font-bold">АРЕЙ</span>
            <br />
            {'РОТА ВОГНЕВОЙ ПІДТРИМКИ'}
          </>
        }
        description="Слава героям України!"
        button={
          <Link href="https://arey-rvp.vercel.app/">
            <Button xl>Дивитися далі</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
