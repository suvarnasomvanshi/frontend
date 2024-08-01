//fetch
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetchingComponent;




//Axios


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetchingComponent;




//React-Query

import {useQuery} from 'react-query';
import axios from 'axios';

const fetchData = async()=>{
    const response = await axios.get('https://api.example.com/data');
    return response.data;
}

function DataFetchingComponent() {
    const {data, error, isLoading} = useQuery('fetchData',fetchData);
    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: {error.message}</div>;
}

return(
    <div>
        {data.map(item =>(
            <>
                <div key={item.id}>{item.name}</div>
            </>
        ))}
    </div>
)
export default DataFetchingComponent;




// 4. Error Handling
// Ensure proper error handling and display user-friendly messages.



//5. Optimistic Updates
// For better user experience, update the UI before the API response is received, and rollback if the request fails.


//6. Debouncing
// Use debouncing for search inputs or similar actions to reduce the number of API calls.


//7. Environment Variables
// Store API endpoints in environment variables for easier management and security.


//8. Code Organization
// Organize API calls in a separate file or service for cleaner and more maintainable code.
// API Service Example:


//apiService.js
import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://api.example.com",
});
export const fetchData = () => apiClient.get('/data');

import React, { useState, useEffect } from 'react';
import { fetchData } from './apiService';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetchingComponent;




