import { Component } from 'react';
export class PhotoForm extends Component {
  state = {
    hitsSearch: '',
  };

  searchPhotosHandler = e => {
    this.setState({ hitsSearch: e.currentTarget.value.toLowerCase() });
  };

  submitPhotos = e => {
    e.preventDefault();

    if(this.state.hitsSearch.trim() === '') {

      return
    }
    this.props.onSubmit(this.state.hitsSearch);
    this.setState({ hitsSearch: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitPhotos}>
        <input
          type="text"
          name="searchPhotos"
          value={this.state.hitsSearch}
          onChange={this.searchPhotosHandler}
        />

        <button type='submit'>Find Photo</button>
      </form>
    );
  }
}

export default PhotoForm;
