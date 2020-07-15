import React from 'react';
import './App.css';
import { getName, addWork } from './actions/myAction'
import { inquickerStagingAction } from './actions/stagingAction'
import { connect } from 'react-redux';
import InQuickerStaging from './Components/InQuickerStaging'


function App(props) {

  const work = props.myWork.map(item => {
    return <h2 key={Math.random()}>{item}</h2>
  })

  const inqueryData = props.inquickerStaging.map(item => {
    return <h2 key={Math.random()}>{item}</h2>
  })

  //console.log(props);
  return (
    <div className="App">

      <InQuickerStaging />

      I am App Copmponent..!!! <br />
      My name is {props.myName}..!!! <br />
      {work}
      <br />
      <button onClick={() => { props.changeName() }}>Get Name</button>
      <button onClick={() => { props.addWork() }}>Add work</button>
      <button onClick={() => { props.getInquickerStaging() }}>Get Staging</button>

      {inqueryData}
      {/* <button onClick={() => fetchData()}>Get Direct data</button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    myWork: state.work,
    inquickerStaging: state.inquickerStaging
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => { dispatch(getName()) },
    addWork: () => { dispatch(addWork()) },
    getInquickerStaging: () => { dispatch(inquickerStagingAction()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
