# Path to Glory: Ravaged Coast

A static Next.js site for running an Age of Sigmar 4th Edition Path to Glory campaign set on the Ravaged Coast.  
Use it to showcase rules, schedule events, battle reports, warband builds, territory maps, and campaign lore—all powered by static data.

## Features

- Battle Reports Display  
- Campaign Map  
- Rules & Schedule  

## Tech Stack

- **Framework**: Next.js (App Router)  
- **Language**: TypeScript/React
- **Styling**: Tailwind CSS, shadcn/ui components  
- **Icons**: lucide-react  
- **Data**: Static JSON and Markdown files under `/data` and `/content`  
- **Deployment**: Static export (Vercel, Netlify, GitHub Pages)

## Getting Started

```bash
git clone https://github.com/nmclauchlan/RavagedCoastCampaign
cd RavagedCoastCampaign
pnpm install
pnpm dev
```

- Browse http://localhost:3000  
- Edit static data in `/data` (e.g., warbands.json, schedule.json, reports.md)  
- Update page content under `app/(dashboard)`  

## Building for Production

```bash
pnpm build
pnpm start       # or use `pnpm export` for purely static hosting
```

## Contributing

- Add new battle reports as Markdown in `/content/reports`  
- Update schedule entries in `/data/schedule.json`  
- Improve UI in `app/(dashboard)` components  

---

Made for the Age of Sigmar community—forge your legend on the Ravaged Coast!
