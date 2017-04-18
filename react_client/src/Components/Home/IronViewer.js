// Dependencies
import React from 'react';
import { Row } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../Actions/Iron/ironViewerActions';
import './bootstrap-table.min.css';
// tesating table

class IronViewer extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchIronData();
  }
  onClick() {
    this.props.history.push('/home/add_iron');
  }
  render() {
    return (
      <div>
        <Row><h1>View Iron Pieces</h1></Row>
        <hr />
        <Button onClick={this.onClick}>Add Iron Piece +</Button>
        <hr />
        <BootstrapTable search multiColumnSearch searchPlaceHolder="Search keywords" scrollTop="top" data={this.props.ironViewerReducer.ironData} striped hover>
          <TableHeaderColumn width="50" isKey dataField="id">ID</TableHeaderColumn>
          <TableHeaderColumn width="150" dataField="Serial_Number">Serial Number</TableHeaderColumn>
          <TableHeaderColumn width="150" dataField="Manufacturer">Manufacturer</TableHeaderColumn>
          <TableHeaderColumn width="150" dataField="Product_Type">Product Type</TableHeaderColumn>
          <TableHeaderColumn width="150" dataField="Iron_Description">Iron Description</TableHeaderColumn>
          <TableHeaderColumn width="200" dataField="Next_Inspection_Due">Next Inspection Due</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ironViewerReducer: state.ironViewerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IronViewer));
