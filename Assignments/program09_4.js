function OddFactoriol(iNo)
{
	let iCnt = 0;
	let iAns = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for(iCnt = iNo,iAns = 1;iCnt != 0; iCnt--)
	{
		if ((iCnt%2) != 0)
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

	iRet = OddFactoriol(iValue);

	console.log("Odd Factoriol is : ",iRet);
}

main();
