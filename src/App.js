import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSimplePackage} from './simplePackage/actions'
import {fetchComplexPackage} from './complexPackage/actions'
import SimplePackage from './simplePackage/components/SimplePackage'
import ComplexPackage from './complexPackage/components/ComplexPackage'
import './App.css'

class App extends Component {
  state = {
    currPackage: 'simple'
  }

  componentDidMount() {
    const {fetchSimplePackage, fetchComplexPackage} = this.props

    fetchSimplePackage()
    fetchComplexPackage()
  }

  handleOnClick = () => {
    const {currPackage} = this.state

    this.setState({currPackage: currPackage === 'simple' ? 'complex' : 'simple'})
  }

  render() {
    const {simplePackage, complexPackage} = this.props
    const {currPackage} = this.state

    return (
      <div className="app">
        {
          currPackage === 'simple' &&
          <SimplePackage simplePackage={simplePackage} />
        }
        {
          currPackage === 'complex' &&
          <ComplexPackage complexPackage={complexPackage} />
        }
        <div className='toggle-button' onClick={this.handleOnClick}>Toggle</div>
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    simplePackage: store.simplePackage.simplePackage,
    complexPackage: store.complexPackage.complexPackage
  }
}

const mapDispatchToProps = {fetchSimplePackage, fetchComplexPackage}

export default connect(mapStateToProps, mapDispatchToProps)(App)
