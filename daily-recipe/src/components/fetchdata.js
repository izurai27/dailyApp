import axios from "axios";


const fetchdata = async (url) => {
  const result = await axios.get(url)
                .then(res => res.data)
                .catch(err => {
                  console.log(err);
                })
      
  return result    
}

export default fetchdata