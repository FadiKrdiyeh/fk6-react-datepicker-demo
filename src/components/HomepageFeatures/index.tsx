import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy To Use',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Get started in seconds with a clean, intuitive interface that fits right into your React app. Whether you're selecting dates, times, or both—our picker handles it all with minimal setup. Built-in localization, flexible calendar types, and rich customization options mean you can tailor it to your users without breaking a sweat. Just import, configure, and go!
      </>
    ),
  },
  {
    title: 'Supports Calendar Type',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Choose the calendar system that fits your audience best. Whether it's Gregorian, Buddhist, Islamic, Hebrew, or custom formats—our datetime picker adapts seamlessly. With built-in support for multiple calendar types, you can localize experiences for global users without extra configuration. Just set your preferred calendar and let the picker do the rest.
      </>
    ),
  },
  {
    title: 'Localization',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Speak your users' language—literally. Our datetime picker comes with built-in localization support for dozens of languages and regional formats. From date and time display to calendar labels and input placeholders, everything adjusts automatically to match your locale. You can even fine-tune translations or add custom ones to create a truly native experience for every audience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
