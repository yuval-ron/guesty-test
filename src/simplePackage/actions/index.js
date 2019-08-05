import {fetchSimplePackageAPI} from '../../services/api'

export const fetchSimplePackage = () => {
  return (dispatch => {
    const simplePackage = fetchSimplePackageAPI()
    dispatch({
      type: 'FETCH_SIMPLE_PACKAGE_SUCCESS',
      payload: simplePackage
    })
    // fetchSimplePackageAPI().then((simplePackage) => {
    //   console.log('simplePackage actions', simplePackage)
    //   dispatch({
    //     type: 'FETCH_SIMPLE_PACKAGE_SUCCESS',
    //     payload: simplePackage
    //   })
    // })
  })
}
