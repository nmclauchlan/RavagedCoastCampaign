import Layout from "../(dashboard)/layout";

export default function MapPage() {
  const battleReports = [
    {
      title: "Battle of the Burning Plains",
      slug: "battle-of-the-burning-plains",
      armies: "Stormcast Eternals vs Orruk Warclans",
      winner: "Stormcast Eternals",
      tokens: 2,
      round: 1,
      location: "Burning Plains",
      aftermath: "Spent 2 Emberstone shards to upgrade Vanguard-Hunters with enchanted warhammers."
    },
    {
      title: "Siege of the Black Fortress",
      slug: "siege-of-the-black-fortress",
      armies: "Soulblight Gravelords vs Lumineth Realm-lords",
      winner: "Lumineth Realm-lords",
      tokens: 3,
      round: 1,
      location: "Black Fortress",
      aftermath: "Used 3 Emberstone shards to reinforce Mortek Guard units and recruit an extra battalion of Lumineth Sentinels."
    },
    {
      title: "Clash at the Shattered Coast",
      slug: "clash-at-the-shattered-coast",
      armies: "Fyreslayers vs Idoneth Deepkin",
      winner: "Idoneth Deepkin",
      tokens: 1,
      round: 2,
      location: "Shattered Coast",
      aftermath: "Allocated 1 Emberstone shard to upgrade Monolith Guard shields and bolster coastal defenses."
    }
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-stone-800 flex justify-center items-start pt-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Battle Reports</h1>
          <div className="space-y-4">
            {battleReports.map((report, idx) => (
              <div id={report.slug} key={idx} className="bg-stone-700 p-4 rounded shadow">
                <p className="text-gray-200">Round: {report.round}</p>
                <h2 className="text-2xl font-semibold">{report.title}</h2>
                <p className="text-gray-300">{report.armies}</p>
                <p className="text-gray-400">Winner: {report.winner}</p>
                <p className="text-gray-200">
                  Emberstone Tokens Earned: {report.tokens}
                </p>
                <p className="text-gray-200">Location: {report.location}</p>
                <p className="text-gray-200">Aftermath: {report.aftermath}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
