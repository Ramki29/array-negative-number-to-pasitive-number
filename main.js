var array=[1,2,3,-4,-5,-6];
var newArray=[];
for(i=0; i<array.length; i++)
	{
	if(array[i]<0)
		{
		newArray.push(Math.abs(array[i]));
		}
	}
	console.log(newArray);