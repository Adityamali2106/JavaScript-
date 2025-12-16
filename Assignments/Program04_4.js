function NonFact(iNo)
{
	let iCnt = 0;
	let iSum = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++)
	{
		if((iNo % iCnt) != 0)
		{
			iSum = iSum + iCnt;
		}
	}

	return iSum;
}

function main()
{
	let iValue = 10;
	let iRet = 0;

	iRet = NonFact(iValue);

	console.log(`Summation is ${iRet}`);
}

main();
