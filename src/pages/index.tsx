import Layout from '@/components/layout';
import Image from 'next/image';
import ShadowText from '@/components/ShadowText';
import Entry from '@/components/Entry';

import Logo from '../../public/images/logo.png';
import Banner from '../../public/images/index-banner.png';
import Entry1 from '../../public/images/entry-1.png';
import Entry2 from '../../public/images/entry-2.png';
import Entry3 from '../../public/images/entry-3.png';
import Entry4 from '../../public/images/entry-4.png';

export default function index() {
  const entries = [
    {
      title: 'HACKER HOUSE',
      slogon:
        'Jointly organized by AntalphaLab & NonceGeekDAO, based in Dali@China, offline, three-week co-living and co-buidling for Hackers.',
      link: {
        text: 'see the history',
        url: '/',
      },
      img: Entry1,
    },
    {
      title: 'ACCELERATOR',
      slogon:
        'Through the offline Accelerator, fully immersively upgraded to solve the core stuck points for the coolest move projects.',
      link: {
        text: 'Apply to join',
        url: '/',
      },
      img: Entry2,
    },
    {
      title: 'CO-LEARNING CAMP',
      slogon: 'An online learning community focus on Move, which is 200+ studiers!',
      link: {
        text: 'Learn more',
        url: '/',
      },
      img: Entry3,
    },
    {
      title: 'Chat-Programming',
      slogon: 'Learn everything about programming by AI.',
      link: {
        text: 'TODO',
        url: '/',
      },
      img: Entry4,
    },
  ];

  return (
    <Layout>
      <div className="banner w-full">
        <Image className="object-cover" src={Banner} alt="Banner" />
      </div>
      <ShadowText text={'MOVE MICRO ACCELERATOR FULFIL EVERY AMBITION'} size={'lg'} addonClass={'mt-5'} />
      <div className="entries pt-[88px] pb-16 flex flex-col gap-y-[104px]">
        {entries.map((entry, i) => (
          <Entry
            key={i}
            title={entry.title}
            slogon={entry.slogon}
            link={entry.link}
            img={entry.img}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
      <div className="partners mt-[112px] flex flex-col items-center">
        <ShadowText text={'PARTNERS'} size={'md'} />
        <div className="mt-10 w-full grid grid-cols-5 gap-y-6">
          {Array(10)
            .fill(1)
            .map((_, i) => (
              <div className="flex justify-center items-center" key={i}>
                <div className="w-[100px] h-[100px] p-4 flex justify-center items-center">
                  <Image className="object-cover" src={Logo} alt="Logo" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
