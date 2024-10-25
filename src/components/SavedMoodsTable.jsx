import { useEffect, useState } from "react";
import axios from "axios";

export default function SavedMoodsTable({ userId }) {
    const [moods, setMoods] = useState([]);

    //Fetch the moods for the logged-in user
    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const response = await axios.get(`/api/moods/${userId}`);
                setMoods(response.data);
            } catch (error) {
                console.error("Error fetching moods: ", error);
            }
        };
        fetchMoods();
    }, [userId]);

    return (
        <table>
            <thead>
                <tr>
                    <th className="delete-cell"></th>
                    <th className="date-cell">Created On</th>
                    <th className="name-cell">Name</th>
                    <th className="spotify-cell"></th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(moods) && moods.length > 0 ? (
                    moods.map((mood) => (
                        <tr key={mood.mood_id}>
                            <td><button>Delete</button></td>
                            <td>{new Date(mood.createdAt).toLocaleDateString()}</td>
                            <td>{mood.name}</td>
                            <td><button>View on Spotify</button></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center' }}>No moods saved yet!</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}