import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
  const [isClient, setIsClient] = useState(false);

  // Initialize state for counters
  const [businessYears, setBusinessYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [cases, setCases] = useState(0);
  const [professionals, setProfessionals] = useState(0);

  useEffect(() => {
    setIsClient(true); // Ensure the component is rendering only on the client side

    // Generate random numbers for each count on component mount
    setBusinessYears(Math.floor(Math.random() * 18) + 20); // Random between 20 and 50
    setClients(Math.floor(Math.random() * 100) + 200); // Random between 200 and 300
    setCases(Math.floor(Math.random() * 1000) + 1000); // Random between 1000 and 2000
    setProfessionals(Math.floor(Math.random() * 10) + 15); // Random between 15 and 25
  }, []);


  // Inline CSS styles
  const containerStyle = {
    padding: '2rem 0',
    margin: '1rem 0',
    backgroundColor: '#070707',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap', // Correct type for flexWrap
    color: 'white',
  };
  

  const counterStyle: React.CSSProperties = {
    textAlign: 'center' as 'center', // Cast to the expected type
    marginBottom: '1rem',
    color: 'white',
  };

  const numberStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: 'white',
  };
  
  const labelStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.5,
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        {isClient && (
          <>
            <div style={{ ...counterStyle, flex: '1 1 25%' }}>
              <div>
                <strong style={numberStyle}>
                  <CountUp end={18} duration={2} suffix="+" />
                </strong>
                <label style={labelStyle}>Business Year</label>
              </div>
            </div>
            <div style={{ ...counterStyle, flex: '1 1 25%' }}>
              <div>
                <strong style={numberStyle}>
                  <CountUp end={240} duration={2} suffix="+" />
                </strong>
                <label style={labelStyle}>Satisfied Clients</label>
              </div>
            </div>
            <div style={{ ...counterStyle, flex: '1 1 25%' }}>
              <div>
                <strong style={numberStyle}>
                  <CountUp end={2000} duration={2} suffix="+" />
                </strong>
                <label style={labelStyle}>Successful Cases</label>
              </div>
            </div>
            <div style={{ ...counterStyle, flex: '1 1 25%' }}>
              <div>
                <strong style={numberStyle}>
                  <CountUp end={100} duration={2} suffix="+" />
                </strong>
                <label style={labelStyle}>Our Projects</label>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CounterSection;
