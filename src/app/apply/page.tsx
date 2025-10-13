import { Button } from '@/components/ui/button';
import { ListChecks, Sparkles, CheckSquare } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full aurora-background -z-10"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 text-center relative z-10">
        
        <section className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Maintainer Application
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Thank you for your interest in becoming a maintainer for <strong className="text-green-300 font-semibold">AxionOS</strong>!
            Please carefully fill out the details on our GitHub issue tracker.
          </p>
          <Link href="https://github.com/AxionAOSP/official_devices/issues/new?template=maintainer_application.yml" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
            <Button size="lg" className="bg-green-300 hover:bg-green-400 text-black font-bold">
              Apply Now via GitHub
            </Button>
          </Link>
        </section>

        <section>
          <div className="space-y-8 max-w-4xl mx-auto text-left">
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-green-300">
                <ListChecks size={24} />Requirements
              </h3>
              <ul className="space-y-3 text-neutral-300 list-disc pl-5">
                <li>You must have prior experience in ROM building.</li>
                <li>Your device sources (Device Tree, Kernel, Vendor) <strong className="text-white">must be publicly available</strong>.</li>
                <li>You should be active in the community and provide regular updates.</li>
                <li><strong className="text-white">Note:</strong> Incomplete applications may be rejected.</li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-green-300">
                <Sparkles size={24} />Experience & Contributions
              </h3>
              <p className="text-neutral-300">
                Describe your experience in ROM development, previous projects, and contributions to the community.
                You will be asked to mention:
              </p>
              <ul className="mt-3 space-y-2 text-neutral-400 list-disc pl-5 text-sm">
                  <li>Mention ROMs you have built.</li>
                  <li>Contributions to device trees, kernel files, etc.</li>
                  <li>Why do you want to be an AxionOS maintainer?</li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-green-300">
                <CheckSquare size={24} />Agreement
              </h3>
              <p className="text-neutral-300 mb-3">By submitting this application, you agree to the following:</p>
              <ul className="space-y-3 text-neutral-300 list-disc pl-5">
                <li>I understand that the only benefit of official maintainership is the ability to post my builds to the official channel, and I accept this.</li>
                <li>I understand the responsibilities of being a maintainer and will provide timely updates.</li>
                <li>I will follow the official guidelines for ROM development and ensure my sources are properly maintained.</li>
                <li>I am aware that failure to maintain my device may result in my removal as a maintainer.</li>
                <li>I confirm that I have tested my build, and it boots without major issues.</li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
