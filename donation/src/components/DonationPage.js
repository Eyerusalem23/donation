import React from 'react';
import ReactDOM from 'react-dom/client';
function DonationPage() {
  const items = [
    { id: 1, name: 'Bank' },
    { id: 2, name: 'Telebirr' },
    { id: 3, name: 'other' }
  ];
  const items2 = [
    { id: 1, name: 'contact' },
    { id: 2, name: 'location' },
    { id: 3, name: 'Description' }
  ]
  return (
    <header>
      <h2>Donation Page</h2>
      <h2>cash</h2>
      <ul>
        {items.map((item) => <li
          key
          ={item.id}>{item.name}</li>)}
      </ul>
      <h2>Material</h2>
      <ul>
        {items2.map((item2) => <li
          key
          ={item2.id}>{item2.name}</li>)}
      </ul>
      <h2>Donation Progress</h2>
    </header>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DonationPage />);
export default DonationPage;