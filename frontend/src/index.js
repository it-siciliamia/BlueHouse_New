import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { fetchRooms } from "./services/apiService";

import "./styles/index.css";

function Index() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRooms = async () => {
            const response = await fetchRooms();
            if (response.success !== false) {
                setRooms(response);
            }
            setLoading(false);
        };
        loadRooms();
    }, []);

    return (
        <div>
            <h1>Blue House Room Booking</h1>
            {loading ? (
                <p>Loading rooms...</p>
            ) : (
                <ul>
                    {rooms.map((room) => (
                        <li key={room.id}>{room.name} - ${room.price} per night</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById("root")
);
