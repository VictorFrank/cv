import './Frontpage.css'

function Frontpage() {
    return (
        <div>
            <h1>Welcome to the Frontpage</h1>
            <p>This is a simple frontpage component.</p>
            <div className="mtg">
                <button onClick={() => window.location.href = '/mtgInput'}>
                    MTG Data Tracker </button>
                <button onClick={() => window.location.href = '/mtgAnalysis'}>
                    MTG Data Analysis </button>
            </div>
        </div>
    )
}

export default Frontpage;