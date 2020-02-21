import React from 'react';

function Card() {
  return (
    <div className="card border">
      <header className="card-header">
        <h2>Entertainment: Video Games</h2>
      </header>
      <main className="card-main border">
        <p>Unturned originally started as a Roblox game.</p>
      </main>
      <footer>
        {1} of {10}
      </footer>
    </div>
  );
}

export default Card;