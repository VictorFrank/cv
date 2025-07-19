

function Frontpage() {
    return (
        <div>
            <h1>Welcome to the Frontpage</h1>
            <p>This is a simple frontpage component.</p>
            <div className="MTG">
                <button onClick={() => window.location.href = '/mtg'}>
                    MTG Data Tracker </button>
            </div>
        </div>
    )
}

export default Frontpage;