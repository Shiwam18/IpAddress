'use client';

import { useState, useEffect } from 'react';
import "./api/ip/route"
export default function Home() {
  const [ip, setIp] = useState<string>('');

  useEffect(() => {
    fetch('/api/ip')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
        console.log(data, "this is res data")
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  }, []);

  return (
    <div>
      <h1>Your IP Address</h1>
      <p>{ip}</p>
    </div>
  );
}
