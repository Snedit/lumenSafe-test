import React from 'react';

const Backup = ({ backups }) => {
  const handleDownload = (cid) => {
    const downloadLink = `https://gateway.lighthouse.storage/ipfs/${cid}/`;
    fetch(downloadLink)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `${cid}.zip`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading the file:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mt-4 mb-6 text-center text-white">My Backups</h2>
      {backups.length === 0 ? (
        <p className="text-white text-center">No backups found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backups.map((backup, index) => (
            <div key={index} className="border border-gray-700 rounded-md p-4 bg-gray-800 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Backup {index + 1}</h3>
              <p className="text-white mb-1">
                CID: 
                <span className="font-mono text-gray-300 block truncate">
                  {backup.cid}
                </span>
              </p>
              <p className="text-white">
                Timestamp: 
                <span className="font-mono text-gray-300">
                  {formatTimestamp(backup.timestamp)}
                </span>
              </p>
              <button
                onClick={() => handleDownload(backup.cid)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Download Zip
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Function to format timestamp
const formatTimestamp = (timestamp) => {
  const date = new Date(Number(timestamp) * 1000); // Convert BigInt to Number explicitly
  return date.toLocaleString();
};

export default Backup;
