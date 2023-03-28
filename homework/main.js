//13 
// 
let array1=[1,2,3]
let array2=[2,3,4]
const diff = (a1,a2) =>
{
    res = []
        const in_arr = (a2,elem) => {
            for(j=0; j<a2.length; j++)
            {
                
                if (a2[j] == elem) {
                return false
            }

            }
            return true
            }   ;
        for(i=0;i<a1.length;i++) {
            if ( in_arr(a2,a1[i])){
                res.push(a1[i])
            }
        };
         
            
          
         
        return res;

}
console.log(diff(array1, array2))