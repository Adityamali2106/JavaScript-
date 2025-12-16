function EvenFactoriol(iNo)
{
	let iCnt = 0;
	let iAns = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for(iCnt = iNo,iAns = 1;iCnt != 0; iCnt--)
	{
		if ((iCnt%2) == 0)
		{
			iAns = iAns * iCnt;
		}
	}

	return iAns;
}

function main()
{
	let iValue = -5;
	let iRet = 0;

	iRet = EvenFactoriol(iValue);

	console.log("Even Factoriol if number is : ",iRet);
}

main();
