import { useQuery } from '@tanstack/react-query';
import { Skeleton } from './ui/skeleton';

interface TeamMember {
  username: string;
  group: 'Core' | 'Management' | 'Contributors';
  position: string;
  avatar_url: string;
}

const fetchTeam = async (): Promise<TeamMember[]> => {
  const res = await fetch('http://localhost:3001/api/team');
  if (!res.ok) throw new Error('Failed to fetch team data');
  return res.json();
};

const TeamSection = () => {
  const { data: members, isLoading, isError } = useQuery({
    queryKey: ['team'],
    queryFn: fetchTeam,
  });

  const groupedMembers = members?.reduce((acc, member) => {
    (acc[member.group] = acc[member.group] || []).push(member);
    return acc;
  }, {} as Record<TeamMember['group'], TeamMember[]>);

  if (isLoading) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        {['Core', 'Management'].map(group => (
          <div key={group} className="mb-16">
            <Skeleton className="h-10 w-48 mx-auto mb-8 bg-neutral-800" />
            <div className="flex justify-center flex-wrap gap-8">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <Skeleton className="h-32 w-32 rounded-full bg-neutral-800" />
                  <Skeleton className="h-6 w-24 bg-neutral-800" />
                  <Skeleton className="h-4 w-32 bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) return <p className="text-red-500">Failed to load team members.</p>;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {groupedMembers && ['Core', 'Management', 'Contributors'].map(group => (
        groupedMembers[group as TeamMember['group']] && (
          <section key={group} className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-neutral-400">{group}</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {groupedMembers[group as TeamMember['group']].map(member => (
                <a 
                  key={member.username} 
                  href={`https://github.com/${member.username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center"
                >
                  <img 
                    src={member.avatar_url} 
                    alt={member.username} 
                    className="h-32 w-32 rounded-full border-4 border-neutral-800 group-hover:border-green-400 transition-all duration-300 transform group-hover:scale-105" 
                  />
                  <p className="mt-4 text-lg font-semibold text-white">@{member.username}</p>
                  <p className="text-sm text-neutral-400">{member.position}</p>
                </a>
              ))}
            </div>
          </section>
        )
      ))}
    </div>
  );
};

export function AboutPageContent() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <section className="mb-24 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          The Idea Behind Axion
        </h1>
        <div className="text-lg md:text-xl text-neutral-300 space-y-6 leading-relaxed">
        <p>
            The primary goal of <i className="text-green-300 not-italic">AxionOS</i> is to deliver a smooth and refined Android experience. We aspire to be the open-source equivalent of <i className="text-green-300 not-italic">NothingOS</i>. By reverse-engineering core components of <i className="text-green-300 not-italic">NothingOS</i>, we aim to recreate and improve upon them as part of our open-source initiative—piece by piece—until we develop our <i className="text-green-300 not-italic">own distinct framework</i>.
        </p>
        <p>
            Our vision explores the question: what if <i className="text-green-300 not-italic">NothingOS</i> were more <i className="text-green-300 not-italic">expressive</i>? What if it embraced <i className="text-green-300 not-italic">Material You design</i>, and more? Through this lens, we craft a unique <i className="text-green-300 not-italic">"what if"</i> version of the original.
        </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Meet the Team
        </h2>
        <TeamSection />
      </section>
    </div>
  );
}
