function FactDiff(iNo)
{
	let iCnt = 0;
	let iSum1 = 0;
	let iSum2 = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt < iNo; iCnt++)
	{
		if((iNo % iCnt) == 0)
		{
			iSum1 = iSum1 + iCnt;
		}
		else
		{
			iSum2 = iSum2 + iCnt;
		}
	}

	return iSum1 - iSum2;
}

function main()
{
	let iValue = 12;
	let iRet = 0;

	iRet = FactDiff(iValue);

	console.log(`Differnce is ${iRet}`);
}

main();
