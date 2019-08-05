const defaultState = {
  complexPackage: {}
}
export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'FETCH_COMPLEX_PACKAGE_SUCCESS': {
      return {
        complexPackage: payload
      }
    }

    default:
     return state
   }
}
