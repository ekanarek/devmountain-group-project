import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton.jsx";
import { useToken } from "../contexts/TokenSliderContext.jsx";
import ViewSavedMoodsPage from "../pages/ViewSavedMoodPage.jsx";

export default function SavedMoodsTable({ selectedMood, setSelectedMood }) {
  const { userId, moodChanged, setMoodChanged } = useToken();
  const [moods, setMoods] = useState([]);
  const navigate = useNavigate();

  //Fetch the moods for the logged-in user
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`/api/moods/${userId}`);
        console.log(response.data);
        setMoods(response.data);
        setMoodChanged(false);
      } catch (error) {
        console.error("Error fetching moods: ", error);
      }
    };
    fetchMoods();
  }, [userId, moodChanged]);

  const handleDeleteMood = (deletedMoodId) => {
    setMoods((prevMoods) =>
      prevMoods.filter((mood) => mood.mood_id !== deletedMoodId)
    );
  };

  const handleRedirect = (mood) => {
    setSelectedMood(mood);
  };

  if (selectedMood) {
    return (
      <ViewSavedMoodsPage
        mood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
    );
  }

  return (
    <table>
      <thead></thead>
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
