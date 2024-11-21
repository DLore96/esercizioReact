import { useEffect, useState } from "react";


let interval = 0;

export function Cronomentro() {

  const [timer, setTimer] = useState<boolean>(false);
  const [second, setSecond] = useState<number>(0);


  useEffect(() => {
    if (timer) {
      interval = setInterval(() => {
        setSecond((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [timer]);

  const handleDeleteButton = () => {
    setTimer(false);
    console.log("cancellato: " + second);
    setSecond(0);
  }

  return (
    <>
      < div className='grid grid-cols-1 md:grid-cols-2'>
        <div className="card bg-warning text-primary-content glass">
          <div className="card-body">
            <h1 className="card-title">Cronometro</h1>
            <div className="card-actions justify-center">
              <h2><b>{Math.floor(second / 60)} : {second % 60}</b></h2>
              <br />
              <button className="btn" onClick={() => setTimer(!timer)}>{timer ? 'Stop' : 'Start'}</button>
              <button className="btn" onClick={handleDeleteButton}>Cancella</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}