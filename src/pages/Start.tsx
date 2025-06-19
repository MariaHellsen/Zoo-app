export const Start = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-start py-2 text-center bg-white text-gray-800 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 animate-pulse">
          Upptäck Vår Digitala Djurfamilj
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl max-w-2xl animate-fadeIn animate-delay-100">
          Upplev glädjen i att mata våra vänner, tryggt från din skärm.
        </h3>
        <div className="absolute bottom-[1px] left-0 w-full h-[120px] overflow-hidden pointer-events-none">
          <div className="relative w-full h-full">
            <img
              src="src/img/Hedgehog.png"
              alt="Igelkot"
              className="absolute top-1/2 w-50 h-200 object-contain"
              style={{
                animation: "hedgehogMove 20s linear infinite",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
