import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import "./AdminPage.css";

function AdminPage() {
	const navigate = useNavigate();

	const [sessionId, setSessionId] = useState("");
	const [topics, setTopics] = useState([""]);
	const [error, setError] = useState("");

	const handleCreateSession = async () => {
		if (!sessionId.trim() || topics.some(topic => !topic.trim())) {
		  setError("Please fill in all fields.");
		  return;
		}	
		const newSession = {
		  id: sessionId,
		  created_at: new Date(),
		  topics: topics.filter((topic) => topic !== ""),
		};	  
		try {
		  const dataRef = collection(db, "sessionTopics");
		  const docRef = await addDoc(dataRef, newSession);	  
		  setSessionId("");
		  setTopics([""]);
		  setError("");	
		  navigate(`/session/${docRef.id}`);
		} catch (error) {
		  setError(error.message);
		}
	  };
	const handleAddTopic = () => {
		setTopics([...topics, ""]);
	};
	const handleTopicChange = (index, value) => {
		const newTopics = [...topics];
		newTopics[index] = value;
		setTopics(newTopics);
	};

	return (
		<div className="container">
			<h2>Topics to discuss</h2>
			<label>
				Session ID:
				<input
					type="text"
					value={sessionId}
					onChange={(event) => setSessionId(event.target.value)}
				/>
			</label>
			{topics.map((topic, index) => (
				<div key={index}>
					<label>
						Topic {index + 1}:
						<input
							type="text"
							value={topic}
							onChange={(event) => handleTopicChange(index, event.target.value)}
						/>
					</label>
				</div>
			))}
			<button onClick={handleAddTopic}>+ Add Topic</button>
			<button onClick={handleCreateSession}>Create Session</button>
			{ error && <p>{error}</p>}
		</div>
	);
}

export default AdminPage;
