import React, {Component} from 'react'

export default class ComplexPackage extends Component {
  render() {
    const {complexPackage: {name, version, dependencies}} = this.props

    return (
      <div className="complex-package-container">
        <div className='name'>{name}</div>
        <div className='version'>{version}</div>
      </div>
    )
  }
}
