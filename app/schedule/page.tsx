import React from "react";
import Layout from "../(dashboard)/layout";

export default function SchedulePage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 text-white bg-neutral-900">
            <div className="p-6 text-white bg-neutral-700 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Campaign Rounds</h1>
              <p className="mb-4">
                Our Path to Glory campaign rounds will be held at Jolt Games
                weekly on Thursdays from 6:30pm. There is a one-time entry fee
                of $35.
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
        </div>
      </div>
    </Layout>
  );
}
