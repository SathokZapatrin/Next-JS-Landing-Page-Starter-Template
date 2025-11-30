import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-[url('/hero-bg.png')] bg-cover bg-center min-h-screen flex flex-col">
    {/* Навбар сверху */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://arey-rvp.vercel.app/">
            History
          </Link>
          </li>
        {/*<li>
          <Link href="/">Sign in</Link>
        </li>*/}
      </NavbarTwoColumns>
    </Section>

    {/* Центральный блок занимает всё оставшееся пространство */}
    <Section yPadding="flex-1 flex items-center justify-center">
      <HeroOneButton
        title={
          <>
            {'ШТУРМОВИЙ БАТАЛЬОН АРЕЙ\n'}
            <span className="text-primary-500">РОТА ВОГНЕВОЙ ПІДТРИМКИ</span>
          </>
        }
        // description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://arey-rvp.vercel.app/">
            <Button xl>HISTORY</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
