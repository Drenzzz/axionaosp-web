// src/app/features/page.tsx

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 text-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-8">
        Features
      </h1>
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
        Detailed feature list coming soon. For now, check our GitHub repository.
      </p>
      <a href="https://github.com/AxionAOSP/axion_features/blob/lineage-22.1/README.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
        View Features on GitHub
      </a>
    </div>
  );
}
