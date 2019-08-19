import React,{Component} from 'react';
import apiKey from '../config'
import Header from './Header';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import '../css/index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };

  }

  componentDidMount() {
      this.performSearch();
  }

  performSearch = (query = 'sunsets') => {
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
        <div className="container">
            <Header/>
            <SearchForm onSearch={this.performSearch}/>

            <div className="photo-container">

              {
                (this.state.loading)
                ? <h3> Loading... </h3>
                : <PhotoContainer data={this.state.images} />
              }
              
              
              
                       
            </div> 
        </div>
    );
  }



}


