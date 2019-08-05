const defaultState = {
  simplePackage: {}
}
export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'FETCH_SIMPLE_PACKAGE_SUCCESS': {
      return {
        simplePackage: payload
      }
    }

    default:
     return state
   }
}
