import { motion } from "framer-motion";
import fotofadgham from "./assets/fotofadgham.jpg";
import fotofathan from "./assets/npcbot.png";
import fotoWildan from "./assets/welldone.jpg";

export default function App() {
  const profiles = [
    {
      name: "Fadgham Khairul Hafizh",
      description: "Fullstack developer, code ninja, dan pemburu ide tengah malam, Suka Samardinda.",
      image: fotofadgham,
    },
    {
      name: "Jusuf Fathan Nuradly",
      description: "Ini foto mas Kim Ham Mam Viktor John Ferdy Ganteng Gila GGS.",
      image: fotofathan,
    },
    {
      name: "Perdana Muhammad Wildanumukhaladun",
      description: "Infokan Gym Terdekat! 💪",
      image: fotoWildan,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex flex-col items-center justify-center px-4 py-10 text-white space-y-10">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text"
      >
        Our Team
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((person, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl shadow-xl max-w-xs w-full p-6 backdrop-blur-md"
          >
            <div className="relative w-36 h-36 mx-auto mb-4">
              <img
                src={person.image}
                alt={person.name}
                className="rounded-full object-cover border-4 border-indigo-500 shadow-lg w-full h-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-indigo-400 animate-pulse opacity-30" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">{person.name}</h2>
            <p className="text-center text-gray-300 text-sm">{person.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
