import "./App.css";
import UseFetch from "./hooks/UseFetch";
function App() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=science";
  const { data:news, loading, error } = UseFetch(BASE_URL);
  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>custom hook</h1>
        </div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error:something went wrong</h1>}
        <div>
          <pre>{JSON.stringify(news, undefined, 2)}</pre>
          <div>
            {news.map((item)=>{
              return <p>{item.title}</p>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
