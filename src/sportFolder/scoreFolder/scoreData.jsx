// ScoreData.js

import React from "react";
import footballScore from "./footballScore";
import handballScore from "./handballScore";
import basketballScore from "./basketballScore";
import rugbyScore from "./rugbyScore";
import "../sportStyle.css";

// This function takes a sport string and returns an array of objects with team data.
function setScoreData(sport) {
    switch (sport) {
        case "football":
            return footballScore;
        case "handball":
            return handballScore;
        case "basketball":
            return basketballScore;
        case "rugby":
            return rugbyScore;
        // Add cases for other sports if necessary
        default:
            return [];
    }
}

function ScoreData({ sport }) {
    // Destructuring the props object and setting its one property key as a new variable.
    const scoreData = setScoreData(sport);

    // No matching sport will return an empty array.
    if (scoreData.length === 0) {
        return <div>Invalid sport</div>;
    }

    return (
        <table className="scoreData">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GD</th>
                    <th>PTS</th>
                </tr>
            </thead>
            {/* Grouping the data rows into a body section to enhance the semantic structure.  */}
            <tbody>
                {scoreData.map((teamScore, index) => (
                    <tr key={index}>
                        <td>{teamScore.team}</td>
                        <td>{teamScore.p}</td>
                        <td>{teamScore.w}</td>
                        <td>{teamScore.d}</td>
                        <td>{teamScore.l}</td>
                        <td>{teamScore.gd}</td>
                        <td>{teamScore.pts}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ScoreData;
