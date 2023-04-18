import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import "./AdminPage.css";

function AdminPage() {
	const navigate = useNavigate();

	const [sessionId, setSessionId] = useState("");
	const [topics, setTopics] = useState([""]);
	const [error, setError] = useState("");

	const handleCreateSession = () => {
		const newSession = {
		  id: sessionId,
		  created_at: new Date(),
		  topics: topics.filter((topic) => topic !== ''),
		};
		console.log(newSession);
		setSessionId('');
		setTopics(['']);
	  };
	
	  const handleAddTopic = () => {
		setTopics([...topics, '']);
	  };
	
	  const handleTopicChange = (index, value) => {
		const newTopics = [...topics];
		newTopics[index] = value;
		setTopics(newTopics);
	  };

	return (
		<div>
		  <h2>Admin Page</h2>
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
		</div>
	  );
}

export default AdminPage;
