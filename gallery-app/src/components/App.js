import React,{Component} from 'react';
import apiKey from '../config'
import Header from './Header';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
// import Error404 from './Error404';
import Nav from './Nav';
import {BrowserRouter, Route ,Redirect} from 'react-router-dom';
import '../css/index.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      defaultCategory : "sunsets" ,
      loading: true
    };
  
  }

  componentDidMount() {
      this.performSearch();
  }

  performSearch = ( query = this.state.defaultCategory ) => {
    const api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=16&format=json&nojsoncallback=1&safe_search=1&api_key=${apiKey}&text=${query}`;
    fetch(api)
      .then(res => res.json())
        .then(resData => {this.setState({
            images: resData.photos.photo,
            loading: false 
        }) 
      })
      .catch( (error) => console.log('Error fetching and parsing data', error) );
  }

  render() {
    return(
        <BrowserRouter>
          
          <div className="container">
              <Header/>
              <Route path="/" render={ (props) => <SearchForm {...props} onSearch={this.performSearch} /> } />

              <nav className="main-nav">
                  <Nav performSearch={this.performSearch} />       
              </nav>

              <div className="photo-container">
                {
                  (this.state.loading)
                  ? <h3> Loading... </h3>
                  : <PhotoContainer data={this.state.images} />    
                }
                
                <Redirect to={`/${this.state.defaultCategory}`} />  
                {/* <Route component={Error404}/> */}
              </div>

          </div>
          
        </BrowserRouter>
    );
  }



}

