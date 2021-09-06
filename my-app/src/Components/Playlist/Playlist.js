import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
<iframe
  src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A78qd8dvwea0Gosb6Fe6j3k"
  width="300"
  height="380"
  frameborder="0"
  allowtransparency="true"
  allow="encrypted-media"
></iframe>;

export default Playlist;
