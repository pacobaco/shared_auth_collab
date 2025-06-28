import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([]);
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessions, setSessions] = useState([]);

  const handleCreateTeam = async () => {
    const res = await axios.post('/api/team', { team_name: teamName });
    setTeams([...teams, res.data]);
  };

  const handleCreateSession = async () => {
    const res = await axios.post('/api/session', { title: sessionTitle, visibility: 'shared' });
    setSessions([...sessions, res.data]);
  };

  useEffect(() => {
    axios.get('/api/session/team/60f7f6f6f6f6f6f6f6f6f6f7') // dummy teamId
      .then(res => setSessions(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shared Auth & Collaboration</h1>

      <div>
        <h2>Create a Team</h2>
        <input value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="Team name" />
        <button onClick={handleCreateTeam}>Create Team</button>
      </div>

      <div>
        <h2>Create a Shared Session</h2>
        <input value={sessionTitle} onChange={e => setSessionTitle(e.target.value)} placeholder="Session title" />
        <button onClick={handleCreateSession}>Create Session</button>
      </div>

      <div>
        <h2>Shared Sessions</h2>
        <ul>
          {sessions.map(s => <li key={s._id}>{s.title}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;