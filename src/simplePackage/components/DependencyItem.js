import React, {Component} from 'react'

export default class DependencyItem extends Component {
  render() {
    const {dependencyName, dependencyVersion} = this.props

    return (
      <div className="dependency-item-container">
        <div>{dependencyName}</div>
        <div>{dependencyVersion}</div>
      </div>
    )
  }
}
