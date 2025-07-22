// src/components/QRScanner.js
import React from 'react';
import QrReader from 'react-qr-reader';

const QRScanner = ({ onScan }) => {
  const handleScan = (data) => {
    if (data) {
      onScan(data); // Call the parent callback with the scanned data
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>Scan QR Code</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRScanner;
