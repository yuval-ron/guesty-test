import React, {Component} from 'react'
import DependencyItem from './DependencyItem'

export default class Dependencies extends Component {
  render() {
    const {dependencies} = this.props

    return (
      <div className="dependencies-container">
        { dependencies &&
          Object.keys(dependencies).map((dependencyName, index) => {
            const dependencyVersion = dependencies[dependencyName]
            return (
              <DependencyItem key={index} dependencyName={dependencyName} dependencyVersion={dependencyVersion} />
            )
          })
        }
      </div>
    )
  }
}
