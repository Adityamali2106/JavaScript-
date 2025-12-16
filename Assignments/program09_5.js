function FactorialDiff(iNo)
{
	let iCnt =0;
	let iAns1 = 0,iAns2 = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for(iCnt = iNo,iAns1 = 1, iAns2 = 1;iCnt != 0; iCnt--)
	{
		if ((iCnt%2) == 0)
		{
			iAns1 = iAns1 * iCnt;
		}

		if ((iCnt%2) != 0)
		{
			iAns2 = iAns2 * iCnt;
		}
	}

	return iAns1 - iAns2;
}

function main()
{
	let iValue = 10;
	let iRet = 0;

	iRet = FactorialDiff(iValue);

	console.log("Factorial Difference is :", iRet);
}

main();