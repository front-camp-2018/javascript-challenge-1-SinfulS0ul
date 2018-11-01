/* eslint-disable-next-line */
export const sortByWeight = arr => {
  // your logic here...
  function toNum(num){
  	return num.split('').reduce((sum, curr)=>{
    	return Number(sum) + Number(curr);
    })
  }
  return arr.sort((a, b)=>{
  	return toNum(a) - toNum(b);
  })
};
