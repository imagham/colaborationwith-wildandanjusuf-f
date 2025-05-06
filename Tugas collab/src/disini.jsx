import fotofadgham from "./assets/fotofadgham.jpg";
import fotofathan from "./assets/npcbot.png";
import fotoWildan from "./assets/welldone.jpg"
export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold ">Fadgham Khairul Hafizh dari Samarinda</h1>
      <img src={fotofadgham} alt="" />
      
      <h1 className="text-3xl font-bold ">Jusuf fathan Nuradly</h1>
      <p>ini foto mas kim ham mam viktor john ferdy ganteng gila ggs</p>
      <img src={fotofathan} alt="" />

      <h1 className="text-3xl font-bold ">Perdana Muhammad Wildanumukhaladun</h1>
      <p>Infokan Gym Terdekatt!</p>
      <img src={fotoWildan} alt="" />
    </div>
  );
}
