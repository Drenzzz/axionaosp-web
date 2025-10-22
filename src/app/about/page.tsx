import { TeamMemberCard } from "@/components/about/TeamCard";
import { CodenamePill } from "@/components/CodenamePill";
import Image from "next/image";

interface TeamMember {
  username: string;
  group: "Core" | "Management" | "Contributors";
  position: string;
  avatar_url: string;
}

interface Device {
  device_name: string;
  codename: string;
  maintainer: string;
  github_username: string;
}

interface Maintainer {
  username: string;
  name: string;
  avatar_url: string;
  devices: { name: string; codename: string }[];
}

async function getTeamData(): Promise<Record<string, TeamMember[]>> {
  const isDev = process.env.NODE_ENV === "development";
  const baseUrl = isDev ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL || "https://axionaosp.vercel.app";
  try {
    const res = await fetch(`${baseUrl}/api/team`, { next: { revalidate: 3600 } });
    if (!res.ok) return {};
    const members: TeamMember[] = await res.json();
    return members.reduce((acc, member) => {
      (acc[member.group] = acc[member.group] || []).push(member);
      return acc;
    }, {} as Record<string, TeamMember[]>);
  } catch (error) {
    console.error("Failed to fetch team data:", error);
    return {};
  }
}

async function getMaintainersData(): Promise<Maintainer[]> {
  try {
    const res = await fetch("https://raw.githubusercontent.com/AxionAOSP/official_devices/main/dinfo.json", { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const devices: Device[] = data.devices;

    const maintainerMap = new Map<string, { name: string; devices: { name: string; codename: string }[] }>();

    devices.forEach((device) => {
      if (!maintainerMap.has(device.github_username)) {
        maintainerMap.set(device.github_username, {
          name: device.maintainer,
          devices: [],
        });
      }
      maintainerMap.get(device.github_username)!.devices.push({ name: device.device_name, codename: device.codename });
    });

    const maintainers = Array.from(maintainerMap.entries()).map(([username, data]) => ({
      username,
      name: data.name,
      avatar_url: `https://github.com/${username}.png`,
      devices: data.devices,
    }));

    return maintainers.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Failed to fetch maintainers data:", error);
    return [];
  }
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-20">
    <h3 className="text-3xl font-bold mb-10 text-neutral-400">{title}</h3>
    {children}
  </section>
);

export default async function AboutPage() {
  const teamData = await getTeamData();
  const maintainers = await getMaintainersData();

  const renderDeviceList = (devices: { name: string; codename: string }[]) => {
    return devices.map((d) => <CodenamePill key={d.codename} codename={d.codename} />);
  };

  return (
    <div className="relative overflow-hidden container mx-auto px-4 pt-32 pb-20 text-center">
      <section className="mb-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">The Idea Behind Axion</h1>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
          <div className="md:w-1/2 text-left text-lg md:text-xl text-neutral-300 space-y-6 leading-relaxed">
            <p>
              The primary goal of <i className="text-green-300 not-italic">AxionOS</i> is to deliver a smooth and refined Android experience. We aspire to be the open-source equivalent of{" "}
              <i className="text-green-300 not-italic">NothingOS</i>. By reverse-engineering core components of <i className="text-green-300 not-italic">NothingOS</i>, we aim to recreate and improve upon them as part of our open-source
              initiative—piece by piece—until we develop our <i className="text-green-300 not-italic">own distinct framework</i>.
            </p>
            <p>
              Our vision explores the question: what if <i className="text-green-300 not-italic">NothingOS</i> were more <i className="text-green-300 not-italic">expressive</i>? What if it embraced{" "}
              <i className="text-green-300 not-italic">Material You design</i>, and more? Through this lens, we craft a unique <i className="text-green-300 not-italic">&quot;what if&quot;</i> version of the original.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/img/screenshot8.png"
              alt="AxionOS Settings"
              width={250}
              height={500}
              className="rounded-3xl mx-auto shadow-2xl shadow-black/50 object-contain"
              style={{ maxHeight: '500px', width: 'auto' }}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Meet the Team</h2>
        <div className="w-full max-w-7xl mx-auto">
          {teamData.Core && (
            <Section title="Core">
              <div className="flex flex-wrap justify-center gap-6">
                {teamData.Core.map((member) => (
                  <div key={member.username} className="w-full sm:w-64 md:w-72">
                    <TeamMemberCard name={member.username} username={member.username} avatar={member.avatar_url} position={member.position} />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {teamData.Management && (
            <Section title="Management">
              <div className="flex flex-wrap justify-center gap-6">
                {teamData.Management.map((member) => (
                  <div key={member.username} className="w-full sm:w-64 md:w-72">
                    <TeamMemberCard name={member.username} username={member.username} avatar={member.avatar_url} position={member.position} />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {maintainers.length > 0 && (
            <Section title="Device Maintainers">
              <div className="flex flex-wrap justify-center gap-6">
                {maintainers.map((m) => (
                  <div key={m.username} className="w-full sm:w-64 md:w-72">
                    <TeamMemberCard name={m.name} username={m.username} avatar={m.avatar_url} position={renderDeviceList(m.devices)} />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {teamData.Contributors && (
            <Section title="Contributors">
              <div className="flex flex-wrap justify-center gap-6">
                {teamData.Contributors.map((member) => (
                  <div key={member.username} className="w-full sm:w-64 md:w-72">
                    <TeamMemberCard name={member.username} username={member.username} avatar={member.avatar_url} position={member.position} />
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </section>
    </div>
  );
}
