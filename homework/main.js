//13 
// 
let array1=[1,2,3]
let array2=[2,3,4]
const diff = (a1,a2) =>
{
    res = []
        // const in_arr = (a2,elem) => {
        //     for(j=0; j<a2.length; j++)
        //     {
                
        //         if (a2[j] == elem) {
        //         return false
        //     }

        //     }
        //     return true
        //     }   ;
        for(i=0;i<a1.length;i++) {
            if ( !a2.includes(a1[i])){
                res.push(a1[i])
            }
        };
         
            
          
         
        return res;

}
console.log(diff(array1, array2))

//12
function isPali(s) {

        // s=s.toString()
        let arr = s //.split()
        //console.log([0,1][arr.length%2])
        let left = arr.slice(0,arr.length/2)
        let right = (arr.slice(arr.length/2,arr.length )).reverse()
        // console.log(left,right)
        

        const isEqual = (a,b) => 
            {
                if (a.length!==b.length){
                    return false
                }
                else{
                    let flag =true
                    a.forEach(element => {
                        for(i=0;i<b.length;i++)
                        {
                            if (element!=b[i]){
                                flag = false
                            }
                        }

                    });
                    return flag
                }
            }
            
            //console.log(_.isEqual(arr.slice(0,arr.length/2)),(arr.slice(arr.length/2,arr.length )).reverse())
            return isEqual(left,right)
        //     for (i=0;i<round(arr.length/2)+1; i++)
        // {
        //     if (arr[i]!=arr[arr.length-i])
        //     {
        //         return false
        //     }
        // }
        // return true
        
}
console.log(isPali([1,2,3,2,1]))
console.log(isPali([1,3,2,1]))
