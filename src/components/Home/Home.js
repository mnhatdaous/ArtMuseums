import * as React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "react-spinkit";
import Gallery from "react-grid-gallery";
import * as objectAction from "./action";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.info.page + 1 > nextProps.info.pages) {
      this.setState({ hasMore: false });
    }
  }

  loadMore = () => {
    const { info, onGetObjects, getObjectsPending } = this.props;
    const page = info.page ? ++info.page : 1;
    if (!getObjectsPending) onGetObjects(6, page);
  };

  render() {
    const { objects, getObjectsError } = this.props;
    return (
      <div className="home">
        <InfiniteScroll
          className="infinite-scroll"
          pageStart={0}
          threshold={0}
          loadMore={() => this.loadMore()}
          hasMore={this.state.hasMore}
          loader={
            <Spinner
              className="spinner"
              key={0}
              name="ball-beat"
              color="#3AA9C2"
            />
          }
        >
          <div className="images">
            <Gallery images={objects} />
          </div>
        </InfiniteScroll>
        {getObjectsError && <h1>Something goes wrong</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    getObjectsPending: state.objectReducer.getObjectsPending,
    getObjectsSuccess: state.objectReducer.getObjectsSuccess,
    getObjectsError: state.objectReducer.getObjectsError,
    objects: state.objectReducer.objects,
    info: state.objectReducer.info
  };
};

export default connect(
  mapStateToProps,
  {
    onGetObjects: objectAction.getObjects
  }
)(Home);
