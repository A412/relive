class Gallery extends React.Component {

  constructor(props) {
    super(props)
    this.state = {photos: []}
  }

  componentWillMount() {
    let photos = [[], [], [], []];

    counter = 0;
    for (let photo of this.props.photos) {
      let caption = photo.captions[0].text;
      let card =  <PhotoCard key={counter} url={photo.url} caption={caption} />;
      photos[counter % photos.length].push(card);
      counter += 1;
    }
    this.setState({ photos: photos });
  }

  renderColumn(index) {
    return (
      <div className="col s12 m4 l3 center">
        <div className="row">
          {this.state.photos[index]}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="">
        <div className="container">

          <div className="row">

            {this.renderColumn.call(this, 0)}
            {this.renderColumn.call(this, 1)}
            {this.renderColumn.call(this, 2)}
            {this.renderColumn.call(this, 3)}

          </div>

        </div>
      </div> 
    );
  }
}
