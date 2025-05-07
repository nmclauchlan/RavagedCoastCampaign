import React from 'react';

export default function SchedulePage() {
  return (
    <div className="p-6 text-white bg-neutral-900">
      <h1 className="text-2xl font-bold mb-4">Campaign Schedule</h1>
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
    </div>
  );
}
