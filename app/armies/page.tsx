import React from "react";
import Layout from "../(dashboard)/layout";

export default function RulesPage() {
  const players = [
    {
      name: "Alice",
      faction: "Stormcast Eternals",
      general: { name: "Commander Valor", rank: "Aspirant" },
      units: ["Stormcast Judicators", "Liberators", "Prosecutors"],
      emberstoneVault: 5,
    },
    {
      name: "Bob",
      faction: "Khorne Bloodbound",
      general: { name: "Warlord Ironclad", rank: "Elite" },
      units: ["Khorne Bloodbound", "Blood Warriors", "Bloodreavers"],
      emberstoneVault: 3,
    },
    {
      name: "Cassandra",
      faction: "Sylvaneth Dryads",
      general: { name: "Lord Stormwind", rank: "Legendary" },
      units: ["Sylvaneth Dryads", "Tree-Revenants", "Kurnoth Hunters"],
      emberstoneVault: 10,
    },
  ];

  // reuse same battleReports as main page
  const battleReports = [
    { title: "Battle of the Burning Plains", slug: "battle-of-the-burning-plains", armies: "Stormcast Eternals vs Orruk Warclans" },
    { title: "Siege of the Black Fortress", slug: "siege-of-the-black-fortress", armies: "Soulblight Gravelords vs Lumineth Realm-lords" },
    { title: "Clash at the Shattered Coast", slug: "clash-at-the-shattered-coast", armies: "Fyreslayers vs Idoneth Deepkin" },
  ];

  return (
    <Layout>
      <div className="p-6 text-white bg-neutral-900">
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Players Rosters</h2>
          {players.map((player, idx) => (
            <details key={idx} className="mb-4 bg-neutral-800 p-4 rounded">
              <summary className="cursor-pointer font-semibold">
                {player.name} – {player.general.rank}{" "}
                <span className="italic">{player.general.name}</span>
              </summary>
              <ul className="list-disc list-inside mt-2">
                {player.units.map((unit, uidx) => (
                  <li key={uidx}>{unit}</li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">
                Emberstone Vault: {player.emberstoneVault} shards
              </p>
              {/* per-player battle report links */}
              <h3 className="mt-4 font-semibold">Battle Reports:</h3>
              <ul className="list-disc list-inside ml-4">
                {battleReports
                  .filter(r => r.armies.includes(player.faction))
                  .map((r, ridx) => (
                    <li key={ridx}>
                      <a
                        href={`/battle-reports#${r.slug}`}
                        className="text-blue-400 underline"
                      >
                        {r.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
        </section>
      </div>
    </Layout>
  );
}
