const combineArrayElement = (array) => {
  const len = array.length
          // console.log(ingredientArr,len)
  let arrayCombined = []
  for (let i=0 ; i<len ; i++){
    arrayCombined = [...arrayCombined,...array[i]]
  }

  return arrayCombined
}




export default combineArrayElement