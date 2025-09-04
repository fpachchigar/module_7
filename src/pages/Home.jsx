import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the Module 7 React app. Navigate through the app to explore the
        Login page and Bitcoin Rates page.
      </p>
      <div style={{ marginTop: "20px" }}>
        <h2>Watch this video to learn more:</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: "10px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
