import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-gradient-to-b from-black to-primary/20">
      <div className="absolute inset-0 z-10">
        <Scene />
      </div>
      
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-8 text-center text-white">
        <h1 className="mb-4 text-6xl font-bold tracking-tight">
          EV Expert
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Professional Repair, Maintenance, and Diagnostics
        </p>
        <button className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/80">
          Explore
        </button>
      </div>
    </main>
  );
}
