import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Components/Main';

function mapStateToProps(state) {
  return {
    defaultState: state.defaultState,
  }
}

const App = connect(mapStateToProps)(Main);

export default App;
