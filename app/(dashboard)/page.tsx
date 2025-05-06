import { Button } from "@/components/ui/button";
import { ArrowRight, Sword, Map } from "lucide-react";
import { Terminal } from "./terminal";

export default function HomePage() {
  return (
    <main>
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/ravaged-coast.jpg')",
          backgroundPositionY: "0",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90 opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-white tracking-tight sm:text-5xl md:text-6xl">
                Forge Your Path
                <span className="block text-red-700">In the Ravaged Coast</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Embark on an epic Path to Glory campaign in the war-torn lands
                of the Ravaged Coast. Build your warband, conquer territories,
                and carve your legend in the Mortal Realms.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="https://www.joltgames.com.au/" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full"
                  >
                    Join Our Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <Sword className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Build Your Warband
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Assemble your warriors, choose your allegiance, and prepare
                  for battle in the Mortal Realms.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <Map className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Conquer Territories
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Expand your domain by claiming territories and resources to
                  strengthen your warband.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Forge Your Legend
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Write your saga as you achieve glory, gain renown, and leave
                  your mark on the Ravaged Coast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-8">
            <div className="p-6 text-white bg-neutral-900">
              <h1 className="text-2xl font-bold mb-4">Campaign Rules</h1>
              <p className="mb-4">
                The campaign will be using the rules in the{" "}
                <strong>Ravaged Coast</strong> book, the{" "}
                <strong>Path to Glory</strong> rules in the 4th edition Core
                Book do not apply. The <strong>General's Hand Book</strong> is
                not used so no Battle Tactics! Players are expected to bring
                their copy of Ravaged Coast to each game.
              </p>
              <h2 className="text-xl font-semibold mb-2">Roster Creation</h2>
              <p className="mb-4">
                Rules for roster creation are laid out in the Ravaged Coast
                book:
                <ul className="list-disc list-inside">
                  <li>
                    A unit cap of 350 points (excluding Sons of Behemat heroes).
                  </li>
                  <li>A limit of 1000 points total.</li>
                  <li>
                    Unique heroes are allowed, but not preferred (350 point
                    limit still applies).
                  </li>
                  <li>
                    If your army has a battletome, you can use the ‘Anvil of
                    Apotheosis’ for a narrative feel.
                  </li>
                  <li>
                    Kitbashed heroes are strongly encouraged, as well as a cool
                    model for your regiment of renown.
                  </li>
                  <li>
                    Allies are allowed, but no other Regiments of Renown outside
                    the Ravaged Coast Book.
                  </li>
                </ul>
                Be careful when creating your roster - you won't be able to
                change it without spending shards.
              </p>
              <p className="mb-4">
                Try to bring a physical copy of your roster written in pencil.
                If you are unable to photocopy the roster pages in the back of
                the book, a blank roster will be provided for you.
              </p>
              <h2 className="text-xl font-semibold mb-2">Aftermath Sequence</h2>
              <p className="mb-4">
                The aftermath sequence <strong>MUST</strong> be completed at the
                end of every game. Update your roster and return it to the
                folder behind the counter. Your opponent must be able to see
                your dice rolls. You can bank Emberstone Shards if you'd like,
                but you cannot update your roster before a game. The aftermath
                sequence takes about 10-15 minutes.
              </p>
              <h2 className="text-xl font-semibold mb-2">Emberstone Shards</h2>
              <p className="mb-4">
                Emberstone shards should be presented differently to objective
                tokens/markers. Creating emberstone clusters on a 40mm base is
                encouraged. Cut up some sprue and use your painting skills to
                make it look like glowing hot shards, or however you imagine
                Emberstone to look.
              </p>
              <h2 className="text-xl font-semibold mb-2">Game Length</h2>
              <p className="mb-4">
                Game lengths are variable and can potentially go on for 6
                rounds. If you are tight on time, ask your opponent if you can
                cap at 5 rounds. Remember you still need to do the aftermath
                sequence once the battle has ended.
              </p>
              <h2 className="text-xl font-semibold mb-2">Battleplans</h2>
              <p className="mb-4">
                Path to Glory is your story, so no two battles will be the same.
                There will be no set battleplan for each round, so you must roll
                on the table for each round. If you roll on a battleplan that
                you or your opponent have already played, you can reroll on the
                table for a different one if you wish.
              </p>
              <h2 className="text-xl font-semibold mb-2">
                Winning the Campaign
              </h2>
              <p className="mb-4">
                Once a player has won a Major Victory on Hel's Claw, the
                campaign ends and that player is declared the winner. However,
                you can continue to keep playing through the event should you
                choose to do so.
              </p>
              <h2 className="text-xl font-semibold mb-2">Catch-Up Games</h2>
              <p className="mb-4">
                If you are unable to attend any rounds, you can arrange to play
                a catch-up game with someone in the league on a day that suits
                you. Catch-up games must be played in store. If you wish to
                switch between armies throughout the campaign, you may do so,
                but you cannot play more than one game per army per week.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-8">
            <div className="p-6 text-white bg-neutral-900 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Campaign Rounds</h1>
              <p className="mb-4">
                Our Path to Glory campaign rounds will be held at Jolt Games weekly on Thursdays from 6:30pm. There is a one-time entry fee of $35.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Round 1 - 22/05/2025</li>
                <li>Round 2 - 29/05/2025</li>
                <li>Round 3 - 05/06/2025</li>
                <li>Round 4 - 12/06/2025</li>
                <li>Round 5 - 19/06/2025</li>
                <li>Round 6 - 26/06/2025</li>
                <li>Round 7 - 03/07/2025</li>
                <li>Round 8 - 10/07/2025</li>
                <li>Round 9 - 17/07/2025</li>
              </ul>
              <div className="mt-6">
                <a
                  href="/map"
                  className="text-red-700 underline hover:text-red-500"
                >
                  View Campaign Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
