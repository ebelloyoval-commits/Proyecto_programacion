import { useState } from "react";

export default function App() {

  const [pantalla, setPantalla] = useState("");

  const agregar = (valor) => {
    setPantalla(pantalla + valor);
  };

  const limpiar = () => {
    setPantalla("");
  };

  const calcular = () => {
    try {
      setPantalla(eval(pantalla).toString());
    } catch {
      setPantalla("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96">

        <h1 className="text-3xl font-bold text-center mb-2">
          Calculadora Básica
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Proyecto Universitario
        </p>

        {/* Pantalla */}
        <div className="bg-black text-green-400 text-right text-4xl p-4 rounded-2xl mb-6 font-mono overflow-hidden">
          {pantalla || "0"}
        </div>

        {/* Botones */}
        <div className="grid grid-cols-4 gap-4">

          <button onClick={() => agregar("7")} className="boton">7</button>
          <button onClick={() => agregar("8")} className="boton">8</button>
          <button onClick={() => agregar("9")} className="boton">9</button>
          <button onClick={() => agregar("/")} className="boton-operacion">÷</button>

          <button onClick={() => agregar("4")} className="boton">4</button>
          <button onClick={() => agregar("5")} className="boton">5</button>
          <button onClick={() => agregar("6")} className="boton">6</button>
          <button onClick={() => agregar("*")} className="boton-operacion">×</button>

          <button onClick={() => agregar("1")} className="boton">1</button>
          <button onClick={() => agregar("2")} className="boton">2</button>
          <button onClick={() => agregar("3")} className="boton">3</button>
          <button onClick={() => agregar("-")} className="boton-operacion">-</button>

          <button onClick={limpiar} className="boton-clear">C</button>
          <button onClick={() => agregar("0")} className="boton">0</button>
          <button onClick={calcular} className="boton-igual">=</button>
          <button onClick={() => agregar("+")} className="boton-operacion">+</button>

        </div>

      </div>

      {/* Estilos */}
      <style>{`
        .boton {
          background: #e5e7eb;
          padding: 16px;
          border-radius: 16px;
          font-size: 24px;
          font-weight: bold;
          transition: 0.2s;
        }

        .boton:hover {
          background: #d1d5db;
        }

        .boton-operacion {
          background: #fb923c;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-size: 24px;
          font-weight: bold;
        }

        .boton-operacion:hover {
          background: #f97316;
        }

        .boton-clear {
          background: #ef4444;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-size: 24px;
          font-weight: bold;
        }

        .boton-clear:hover {
          background: #dc2626;
        }

        .boton-igual {
          background: #3b82f6;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-size: 24px;
          font-weight: bold;
        }

        .boton-igual:hover {
          background: #2563eb;
        }
      `}</style>

    </div>
  );
}
