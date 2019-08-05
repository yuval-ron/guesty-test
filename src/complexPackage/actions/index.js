import {fetchComplexPackageAPI, getNpmModulesResolve} from '../../services/api'

export const fetchComplexPackage = () => {
  return (dispatch => {
    const complexPackage = fetchComplexPackageAPI()
    dispatch({
      type: 'FETCH_COMPLEX_PACKAGE_SUCCESS',
      payload: complexPackage
    })
  })
}
