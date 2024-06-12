import React from "react";

export default function PresentationCard() {
  return (
    <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  ">
      <div className="ola z-600"></div>
      <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5 z-10 text-shadow">
        🖐🏼 Hola, Soy Alitzel Gonzalez
      </h1>
      <p className=" max-w-md break-normal text-md md:text-lg lg:text-2xl text-shadow text-white z-20">
        Soy mas que una Arquitecta!
        <br />
        Mi misión es transformar espacios con creatividad, funcionalidad y elegancia, siempre buscando innovar y superar las expectativas de mis clientes.
      </p>
      <img
        src="assets/images/rostro.png"
        className="absolute bottom-25 -right-2/4 w-11/12 md:h-full md:auto object-cover z-10 hidden md:flex"
      />
    </div>
  );
}
