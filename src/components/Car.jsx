import React, {useState, useEffect} from 'react';



export default function Car() {
    const [started, setStarted] = useState(false);
    const [countKm, setCountKm] =useState(0);

    useEffect(() => {
        document.title = `Carro ${started}`;
    }, [started]);

    const checkStartedCar = () => {
        if (started) {
            return <span style={{ color: "green" }}>Encendido</span>;
        }
        return <span style={{ color: "red" }}>Apagado</span>;

    };

    const increaseKm = num => {
        if (started) {
            setCountKm(countKm + num)
        }
        else{
            alert("El carro esta apagado!");
        }
    }
    
    return (
        <div>
            <h2>Nuestro carro esta: {checkStartedCar ()} </h2>
            <h2>Kilometros recorridos: {countKm} </h2>
            <button onClick={() => {setStarted(!started)}}>Encender / Apagar</button><br /><br />
            <button onClick={() => {increaseKm(5)}}>Incrementar Kilometros </button><br />
        </div>


    );
}