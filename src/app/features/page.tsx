import { Card, CardContent } from '@/components/ui/card';
import { featureSections, type FeatureCategory, type FeatureItem } from '@/lib/features';
import { Sparkle, CheckCircle } from 'lucide-react';
import { JSX } from 'react';

const RenderFeatureSection = ({ category }: { category: FeatureCategory }) => {
  let headingClass = "text-green-300";
  let headingTag: keyof JSX.IntrinsicElements = 'h4';

  if (category.level === 1) {
      headingTag = 'h2';
      headingClass = "text-3xl font-bold text-green-300 mt-12 mb-6 border-b border-neutral-700 pb-2 flex items-center gap-2";
  } else if (category.level === 2) {
      headingTag = 'h3';
      headingClass = "text-2xl font-bold text-green-400 mt-8 mb-4 flex items-center gap-2";
  } else if (category.level === 3) {
      headingTag = 'h4';
      headingClass = "text-xl font-semibold text-neutral-200 mt-6 mb-3 flex items-center gap-2";
  }
   const Heading = headingTag;


  return (
    <div className={category.level > 1 ? 'ml-4' : ''}>
      <Heading className={headingClass}>{category.title}</Heading>

      {category.items && category.items.length > 0 && (
        <ul className="list-none pl-2 space-y-3 mb-6">
          {category.items.map((item, index) => (
            <li key={index} className="flex flex-col items-start">
              <div className='flex items-center gap-2'>
                 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1"/>
                 <span className={` ${item.isNew ? 'text-white font-semibold' : 'text-neutral-300'}`}>
                    {item.name}
                    {item.description && <span className="text-neutral-400 text-sm ml-2">- {item.description}</span>}
                 </span>
              </div>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="list-disc pl-10 mt-2 space-y-1 text-neutral-400 text-sm">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {category.subCategories && category.subCategories.length > 0 && (
        <div className="pl-4 border-l border-neutral-700/50">
          {category.subCategories.map((subCategory, index) => (
            <RenderFeatureSection key={index} category={subCategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            AxionOS <span className="text-green-300">Features</span>
          </h1>
          <p className="text-lg text-neutral-400">
            Explore the curated features that make AxionOS a smooth, efficient, and unique Android experience.
          </p>
        </header>

        <Card className="bg-neutral-800/50 border border-neutral-700/80 rounded-2xl overflow-hidden max-w-4xl mx-auto backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            {featureSections && featureSections.length > 0 ? (
              featureSections.map((section, index) => (
                <RenderFeatureSection key={index} category={section} />
              ))
            ) : (
              <p className="text-neutral-400 text-center">Feature list is currently empty.</p>
            )}
          </CardContent>
        </Card>

         <div className="text-center mt-12 footer-icon-effect">
            <a href="https://github.com/AxionAOSP/axion_features/blob/lineage-22.1/README.md" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-green-400 transition-colors">
                 View original source on GitHub
            </a>
         </div>

      </div>
    </div>
  );
}

export const metadata = {
  title: "Features | AxionAOSP",
  description: "Explore the curated features of AxionOS.",
};
