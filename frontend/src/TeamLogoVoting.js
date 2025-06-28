import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamLogoVoting = ({ teamId }) => {
  const [logos, setLogos] = useState([]);
  const [newLogo, setNewLogo] = useState('');

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    const res = await axios.get(`/api/logo/team/${teamId}`);
    setLogos(res.data);
  };

  const handleVote = async (logoId) => {
    await axios.put(`/api/logo/${logoId}/vote`);
    fetchLogos();
  };

  const handleSubmit = async () => {
    await axios.post('/api/logo', { team_id: teamId, image_url: newLogo });
    setNewLogo('');
    fetchLogos();
  };

  return (
    <div>
      <h3>Team Logo Voting</h3>
      <input value={newLogo} onChange={e => setNewLogo(e.target.value)} placeholder="Logo image URL" />
      <button onClick={handleSubmit}>Submit Logo</button>

      <ul>
        {logos.map(logo => (
          <li key={logo._id}>
            <img src={logo.image_url} alt="Team Logo" width="80" />
            <div>Votes: {logo.votes.length}</div>
            <button onClick={() => handleVote(logo._id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamLogoVoting;
