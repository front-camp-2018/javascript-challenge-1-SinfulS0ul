/* eslint-disable-next-line */
export const doubleNum = num => {
  // your logic here...
  if(String(num).substring(0,String(num).length/2|0) === String(num).substring(String(num).length/2|0))
    return num;
  else
  	return num*2;
};
