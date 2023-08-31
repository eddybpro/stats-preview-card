import "./App.css";

function App() {
  return (
    <main>
      <div className="ImgContainer"></div>
      <div className="TxtContainer">
        <h1 className="TxtContainer-Title">
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className="TxtContainer-Para">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="TxtContainer-StatusWrapper">
          <div className="TxtContainer-StatusWrapper-StatusBox">
            <h2>10k+</h2>
            <p>companies</p>
          </div>
          <div className="TxtContainer-StatusWrapper-StatusBox">
            <h2>314</h2>
            <p>templates</p>
          </div>
          <div className="TxtContainer-StatusWrapper-StatusBox">
            <h2>12m+</h2>
            <p>queries</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
