import { Component } from 'react';

class ImageInfo extends Component {
  state = {
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=38894004-6d48aacf53b986fdbdf72bda8&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(totalHits => this.setState({ totalHits }))
    }
  }
  render() {
    return (
      <div>
        <h1>Hello from info</h1>
        <p>{this.props.imageName}</p>
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
        )}
      </div>
    );
  }
}

export default ImageInfo;
