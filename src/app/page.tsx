import FoxComponent from "./Components/Experiences/Fox/FoxComponent"


export default function Home() {
  return (
    <main>
      <div className="h-screen relative w-screen bg-gray-900 text-white">
        <div className="absolute min-w-full h-screen z-0">
          <FoxComponent />
        </div>
        <div className="px-32 h-screen flex items-center w-7/12">
          <div className="flex gap-6 flex-wrap">
            <h1 className="text-6xl">Nous réalisons vos sites web avec panache !</h1>
            <p className="text-2xl">Notre studio design et code vos sites web en complétant vos objectifs business et les attentes UX de vos utilisateurs.</p>
            <div className="z-50 flex gap-8">
              <button className="bg-slate-800 p-4 text-white rounded">Démarrer un projet</button>
              <button className="">En savoir plus</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
