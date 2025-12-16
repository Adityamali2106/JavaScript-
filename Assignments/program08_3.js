function Factorial(iNo)
{
	let iCnt = 0;
	let iFact = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = iNo,iFact = 1; iCnt >= 1; iCnt--) 
	{
		iFact = iFact * iCnt;
	}

	return iFact;
}

function main()
{
	let iValue = 4;
	let iRet = 0;

	iRet = Factorial(iValue);

	console.log(`Factorial of ${iValue} is ${iRet}`);
}

main();