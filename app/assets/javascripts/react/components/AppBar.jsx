class AppBar extends React.Component {

  constructor(props) {
    super(props);
    
    $('body').on('click', 'a.upload', (event) => {
      $('a[href="#upload-photo"]').click(); // click tab
    });
  }

  componentDidMount() {
    $('ul.tabs#nav-tabs').tabs();
    $('.button-collapse').sideNav({ closeOnClick: true });
  }

  render() {
    return (
      <div>

        {/* Navbar*/}
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper container">
              <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
              <a href="#" className="brand-logo"><i className="material-icons">filter</i>Filterz {/*<em style={{fontSize: "14px"}}>CalHacks 3.0</em>*/}</a>

              <div className="row hide-on-med-and-down">
                <div className="right col s3">
                  <ul id="nav-tabs" className="tabs">
                    <li id="#" className="tab col s1"><a id="#" href="#" className="nav-anchor page-link">Gallery</a></li>
                    <li id="#upload" className="tab col s1"><a id="#upload" href="#uploadModal" className="nav-anchor upload modal-trigger">Upload</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </nav>
        </div>
        

        {/* Sidebar */}
        <Sidebar active={this.props.active}/>
      </div>
    );
  }
}
