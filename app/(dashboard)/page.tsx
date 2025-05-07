import { Button } from "@/components/ui/button";
import { ArrowRight, Sword, Map, BookOpen, Calendar, FileText } from "lucide-react";
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
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  View Rules
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Read the campaign rules to understand gameplay, warband builds, and victory conditions.
                </p>
                <a href="/rules">
                  <Button size="sm" variant="outline" className="mt-4 rounded-full">
                    View Rules
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Schedule
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Keep track of upcoming battles, events, and campaign milestones.
                </p>
                <a href="/schedule">
                  <Button size="sm" variant="outline" className="mt-4 rounded-full">
                    View Schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <FileText className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Battle Reports
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Review past battle reports to analyze strategies, outcomes, and improve your tactics.
                </p>
                <a href="/battle-reports">
                  <Button size="sm" variant="outline" className="mt-4 rounded-full">
                    View Reports
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
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

    </main>
  );
}
