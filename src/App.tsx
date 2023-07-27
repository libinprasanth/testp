import React, { useEffect, useState } from 'react';
import './App.css';
import client, { spaceId } from './client';

function App() {
  
  const [name, setName] = useState('');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try { 
      const space = await client.getSpace(spaceId);
      // Get the default environment (usually 'master')
      const environment = await space.getEnvironment('master');
      const entry = await environment.createEntry("myForm", {
        fields: {
          name: {
            'en-US': name // Replace 'en-US' with your desired locale
          },
        }
      })
      entry.publish();
    } catch (error) {
      console.error('Error pushing data:', error);
    }
  }

  useEffect(() => {
    load()
  }, [])
  const load = async () => {
    client.getSpace(spaceId).then((data: any) => {
      console.log(data)
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
