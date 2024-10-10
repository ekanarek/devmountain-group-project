import React from 'react';
import '.App.css';

function landingPage() {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Sync</h1>
            </header>

            <div className="main-container">
                <aside className="landing-sidebar">
                    <nav>
                        <ul>
                            <li>Back to Home</li>
                            <li>Genres!</li>
                            <li>Moods!</li>
                            <li>Playlists</li>
                        </ul>
                    </nav>
                </aside>

                <main className="feed">
                    <div>
                        <h2>Your Feed</h2>
                    </div>
                </main>

                <aside className="friends-list">
                    <h2>Friends list</h2>
                    <ul>uhhhhhhh we'll get this added smile</ul>
                </aside>
        </div>
        </div>
    );
}

export default landingPage