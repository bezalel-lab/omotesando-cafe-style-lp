import React from 'react';
import Heading from '../../elements/Heading';
import AboutFeatureItem from './about-feature-item/AboutFeatureItem';
import Wrapper from '../../elements/Wrapper';


const About: React.FC = () => {
  return (
    <section className="bg-main py-16 text-dark lg:py-20 xl:pt-[122px] xl:pb-[140px]">
      <Wrapper>
        <div className="mx-auto max-xs:max-w-[440px]">
          <Heading text="About" level={3} furigana="Garden Saladのこだわり" />
          <div className="-space-y-2 lg:mt-16 xl:space-y-16 xl:mt-[106px]">
            <AboutFeatureItem
              index="01"
              description="TF Garden Saladの食材は全て産地を公表をしています。信頼できる農家さんから直接買い取り、その日採れたものをその日のうちに厨房へ。"
              imageUrl="/images/about_1.png"
              imageAlt="国産の新鮮な食材"
            >
              全ての食材が安心の<span className="text-accent">国産</span>
            </AboutFeatureItem>
            <AboutFeatureItem
              index="02"
              description="定番のメニューに加えてサラダのフルカスタムも可能。お好みのベース×トッピング×ドレッシングを選んであなた好みにアレンジして。"
              imageUrl="/images/about_2.png"
              imageAlt="多種多様なサラダ"
              imagePosition='right'
            >カスタム可能でその組み合わせは<span className='text-accent'>全400</span>種類！</AboutFeatureItem>
            <AboutFeatureItem
              index="03"
              description="コンビニのサラダチキンに飽きたらこれ！一食でタンパク質20gがとれるトレーニング向けのメニューもご用意してます。"
              imageUrl="/images/about_3.png"
              imageAlt="タンパク質豊富なサラダ"
            ><span className='text-accent'>ジムトレーナー監修</span>の<br className='xl:hidden' />メニュー</AboutFeatureItem>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
