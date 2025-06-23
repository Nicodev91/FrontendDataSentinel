import fondo from '../assets/indexassets.png';

export default function BackgroundImage() {
  return (
    <div className="relative h-screen w-full">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fondo})` }}
      />
    </div>
  );
}
