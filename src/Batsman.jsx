import { useState } from "react"

export default function () {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const numberOfSixes = sixes + 1;
        setRuns(updatedRuns);
        setSixes(numberOfSixes);
    }


    return (
        <div>
            <h3>Player: Bnagla Batsman</h3>
            {
                runs >= 50 && <p>You score {runs} runs</p>
            }

            <p><small>Six: {sixes}</small></p>

            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}