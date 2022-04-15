const combineArrayElement = (array) => {
  // const len = array.length
  let arrayCombined = []
  
  // for (let i=0 ; i<len ; i++){
  //   arrayCombined = [...arrayCombined,...array[i]]
  // }

  array.map(elemen => arrayCombined = [...arrayCombined,...elemen])

  return arrayCombined
}




export default combineArrayElement