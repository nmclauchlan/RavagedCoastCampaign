import Layout from "../(dashboard)/layout";

export default function MapPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-stone-800 flex justify-center items-start pt-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Age of Sigmar 4th Battle Reports</h1>
          <div className="space-y-4">
            <div className="bg-stone-700 p-4 rounded shadow">
              <h2 className="text-2xl font-semibold">Battle of the Burning Plains</h2>
              <p className="text-gray-300">Stormcast Eternals vs Orruk Warclans</p>
              <p className="text-gray-400">Winner: Stormcast Eternals</p>
              <p className="text-gray-200">Emberstone Tokens Earned: 2</p>
            </div>
            <div className="bg-stone-700 p-4 rounded shadow">
              <h2 className="text-2xl font-semibold">Siege of the Black Fortress</h2>
              <p className="text-gray-300">Soulblight Gravelords vs Lumineth Realm-lords</p>
              <p className="text-gray-400">Winner: Lumineth Realm-lords</p>
              <p className="text-gray-200">Emberstone Tokens Earned: 3</p>
            </div>
            <div className="bg-stone-700 p-4 rounded shadow">
              <h2 className="text-2xl font-semibold">Clash at the Shattered Coast</h2>
              <p className="text-gray-300">Fyreslayers vs Idoneth Deepkin</p>
              <p className="text-gray-400">Winner: Idoneth Deepkin</p>
              <p className="text-gray-200">Emberstone Tokens Earned: 1</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
