import React from 'react';

export default function RulesPage() {
  const players = [
    {
      name: 'Alice',
      general: { name: 'Commander Valor', rank: 'Aspirant' },
      units: ['Stormcast Judicators', 'Liberators', 'Prosecutors'],
      emberstoneVault: 5,
    },
    {
      name: 'Bob',
      general: { name: 'Warlord Ironclad', rank: 'Elite' },
      units: ['Khorne Bloodbound', 'Blood Warriors', 'Bloodreavers'],
      emberstoneVault: 3,
    },
    {
      name: 'Cassandra',
      general: { name: 'Lord Stormwind', rank: 'Legendary' },
      units: ['Sylvaneth Dryads', 'Tree-Revenants', 'Kurnoth Hunters'],
      emberstoneVault: 10,
    },
  ];

  return (
    <div className="p-6 text-white bg-neutral-900">
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Players Rosters</h2>
        {players.map((player, idx) => (
          <details
            key={idx}
            className="mb-4 bg-neutral-800 p-4 rounded"
          >
            <summary className="cursor-pointer font-semibold">
              {player.name} – {player.general.rank}{' '}
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
          </details>
        ))}
      </section>
    </div>
  );
}
