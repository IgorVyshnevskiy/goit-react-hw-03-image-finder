// import { fetchPhotos } from "./services/api";
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import PhotoForm from './form/PhotoForm';
import ImageInfo from './imageContainerInfo/ImageInfo';

class App extends Component {
  state = {
    photoSearch: '',
    totalHits: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.photoSearch}&page=1&key=38894004-6d48aacf53b986fdbdf72bda8&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(totalHits => this.setState({ totalHits }))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProp, prevState) {}

  handleFormSubmit = photoName => {
    this.setState({ photoSearch: photoName});
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <PhotoForm onSubmit={this.handleFormSubmit} />

        <ImageInfo imageName={this.state.photoSearch}/>
        <ToastContainer />
        {/* {this.state.isLoading && <h1>Loading...</h1>}
        {this.state.totalHits && (
          <ul>
            {this.state.totalHits.hits.map((hit, index) => {
              return (
                <li key={index}>
                  <img src={hit.largeImageURL} alt='some img' />
                </li>
              );
            })}
          </ul>
        )} */}
      </div>
    );
  }
}

export default App;
