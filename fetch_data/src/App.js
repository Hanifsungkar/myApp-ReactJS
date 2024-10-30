import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  // let init_todos = [
  //   { id:"1", title: "Initiate github", completed: false }, 
  //   { id:"2", title: "Create GCP slice", completed: true }, 
  //   { id:"3", title: "Create CI / CD", completed: false }
  // ]
  
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
    params: {
      'q':'election',
      'api-key': 'GUrTMclLdmCqoX9jA3UahryFNSOwGHqg'
    }
    })
    .then(res => {
      setNews(res.data.response.docs)
    })
  }, [])
  
  return (
    <div className="container">
      <div className="row">
        {
          news.map(item => (
        <div className="col-md-4" key={item.id}>
          <div className="card">
            <img src='...' className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.abstract}</h5>
              <p className="card-text">{item.lead_paragraph}</p>
              <a href={item.web_url} className="btn btn-primary" target='_blank' rel='noreferrer'>
                Go somewhere</a>
            </div>
          </div>
        </div>
      ))
    }
      </div>
    </div>
  );
}

export default App;