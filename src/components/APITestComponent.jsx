import React, { useState, useEffect } from 'react';
import { axiosGetComprehensiveRoomData } from '../api/api';

const APITestComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testAPI = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const startDate = new Date().toISOString().split('T')[0];
      const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const result = await axiosGetComprehensiveRoomData(startDate, endDate);
      setData(result);
      console.log('API Test Result:', result);
    } catch (err) {
      setError(err.message);
      console.error('API Test Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🧪 Beds24 API Test</h2>
      
      <button 
        onClick={testAPI} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test API'}
      </button>

      {loading && <p>🔄 Loading...</p>}
      
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <h3>❌ Error:</h3>
          <p>{error}</p>
        </div>
      )}

      {data && (
        <div style={{ marginTop: '20px' }}>
          <h3>✅ API Test Results:</h3>
          <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
            <p><strong>Rooms Found:</strong> {data.rooms?.length || 0}</p>
            <p><strong>Property:</strong> {data.property?.propertyName || 'N/A'}</p>
            <p><strong>Room Types:</strong> {data.roomTypes?.length || 0}</p>
            <p><strong>Inventory Data:</strong> {data.inventory ? '✓ Available' : '✗ Missing'}</p>
            <p><strong>Timestamp:</strong> {data.timestamp}</p>
          </div>
          
          <details style={{ marginTop: '10px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              📋 View Raw Data
            </summary>
            <pre style={{ 
              backgroundColor: '#f1f1f1', 
              padding: '10px', 
              overflow: 'auto',
              fontSize: '12px'
            }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default APITestComponent;