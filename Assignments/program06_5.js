function Percentage(iNo1,iNo2)
{
	let fAns = 0.0;
	
	if (iNo1 == 0)								
	{
		return fAns;
	}
	else if (iNo2 == 0)								
	{
		return fAns;
	}
	
	fAns = (iNo2 / iNo1) * 100;
	
	return fAns;	
}

function main()
{
	let iValue1 = 1000, iValue2 = 745;
	let dRet = 0.0;

	dRet = Percentage(iValue1, iValue2);

	console.log("Total obtained Percentage is : ", dRet);
}

main();