export function Menu({eventReload, eventNew}: any) {

    const handleReloadButton = () => {
        eventReload();
    }

    const handleNewButton = () => {
        eventNew();
    }
    return (
        <div className="card bg-primary text-primary-content glass">
            <div className="card-body">
                <h1 className="card-title">Gestione dei To-do</h1>
                <p>Puoi inserire un nuovo To.do, oppure Svuotare la lista</p>
                <div className="card-actions justify-center">
                    <button className="btn" onClick={handleNewButton}>Nuovo To-do</button>
                    <button className="btn" onClick={handleReloadButton}>Svuota Lista</button>
                </div>
            </div>
        </div>
    );
}