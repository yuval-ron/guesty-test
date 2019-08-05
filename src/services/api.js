import simplePackageJson from '../data/simple-package.json'
import complexPackageJson from '../data/complex-package.json'

export const fetchSimplePackageAPI = () => {
  return simplePackageJson
}

export const fetchComplexPackageAPI = () => {
  const complexPackageDependencies = complexPackageJson.dependencies
  const resolvePackage = getResolvePackage(complexPackageDependencies)
  return resolvePackage
}

// export const getDepandencies = (dependency) => {
//   debugger
//   let dependencies = {}
//   if (!dependency.dependencies) {
//     dependencies[dependency.name] = dependency.version
//     return dependencies
//   }

//   Object.keys(dependency.dependencies).foreach(dependencyId) => {
//     const dependencyy = dependency.dependencies[dependencyId]
//     dependencies = {...dependency.dependencies, ...getDepandencies(dependencyy)}
//   }
// }

export const getResolvePackage = (dependencies) => {
  let resultPackage = {}
  // Object.keys(dependencies).map((dependency) => {
  //   // const dependencyValue = dependencies[dependencyName]
  //   getDepandencies(dependency)
  // }
  Object.keys(dependencies).map((dependencyName) => {
    const dependencyValue = dependencies[dependencyName]
    if (typeof dependencyValue === "string") {
      resultPackage[dependencyName] = dependencyValue
    }
    else if (typeof dependencyValue === "object")
      getResolvePackage(dependencyValue.dependencies)
  })

  console.log("dependencies", resultPackage)
}

//   return fetch('../data/simple-package.json')
//   .then(response => {
//     console.log('api.js response', response)
//     console.log("hhhh")
//   })
//   .then(data => {
//     console.log('data', data)
//     return {
//       simplePackage: data
//     }
//     console.log(data)
//   })
//   .catch(error => console.error(error))
// }

//   return fetch('https://randomuser.me/api/?results=100')
//     .then(response => response.json())
//     .then(data => {
//       const usersObj = data.results.reduce((result, currentUser) => {
//         console.log('Api.js currentUser', currentUser)
//         result[currentUser.phone] = currentUser

//         return result
//       }, {})

//       console.log('Api.js usersObj', usersObj)

//       return {
//         users: usersObj
//       }
//     })
//     .catch(error => console.error(error))
// }
