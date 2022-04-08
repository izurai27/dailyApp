const totalPerElement = (array) => {
  const ingredientReduce=[]
  array.reduce(function(result, item) {
            
    if (!result[item.ingredientsName]) {
      result[item.ingredientsName] = { userid:item.userid, ingredientsName: item.ingredientsName, multipliedQuantity: 0, measurement:item.measurement, status:false };
      ingredientReduce.push(result[item.ingredientsName])
    }

    result[item.ingredientsName].multipliedQuantity += item.multipliedQuantity;
             
    return result;

  }, {});

  return ingredientReduce
}



export default totalPerElement