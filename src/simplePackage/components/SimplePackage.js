import React, {Component} from 'react'
import Dependencies from './Dependencies'

export default class SimplePackage extends Component {
  render() {
    const {simplePackage: {name, version, dependencies}} = this.props
    return (
      <div className="simple-package-container">
        <div className='name'>{name}</div>
        <div className='version'>{version}</div>
        <Dependencies dependencies={dependencies} />
      </div>
    )
  }
}
