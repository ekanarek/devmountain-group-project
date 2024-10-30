import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton.jsx";
import { useToken } from "../contexts/TokenSliderContext.jsx";

export default function SavedMoodsTable() {
  const { userId } = useToken();
  const [moods, setMoods] = useState([]);
  const navigate = useNavigate();

  //Fetch the moods for the logged-in user
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`/api/moods/${userId}`);
        console.log(response.data);
        setMoods(response.data);
      } catch (error) {
        console.error("Error fetching moods: ", error);
      }
    };
    fetchMoods();
  }, [userId]);

  const handleDeleteMood = (deletedMoodId) => {
    setMoods((prevMoods) =>
      prevMoods.filter((mood) => mood.mood_id !== deletedMoodId)
    );
  };

  const handleRedirect = (mood) => {
    navigate("/results", { state: { parameters: mood.parameters } });
  };

  return (
    <table>
      <thead>
        {/* <tr>
          <th className="delete-cell"></th>
          <th className="date-cell">Created On</th>
          <th className="name-cell">Name</th>
          <th className="redirect-cell"></th>
        </tr> */}

      </thead>
      <tbody>
        {Array.isArray(moods) && moods.length > 0 ? (
          moods.map((mood) => (
            <tr className="tableRow" key={mood.mood_id}>
              <td className="moodDetails">
                <div
                  className="moodContainer"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {mood.name}
                  <DeleteButton
                    moodId={mood.mood_id}
                    onDelete={handleDeleteMood}
                  />
                </div>
              </td>
              <td
                className="moodDetails"
                style={{ fontWeight: "lighter", fontSize: "14px" }}
              >
                Created on: {new Date(mood.createdAt).toLocaleDateString()}
              </td>
              <td className="moodDetails">
                <button
                  style={{
                    border: "transparent",
                    background: "transparent",
                    cursor: "pointer",
                    color: "#ee28ff",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleRedirect(mood)}
                >
                  View Mood
                </button>

              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No moods saved yet!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
