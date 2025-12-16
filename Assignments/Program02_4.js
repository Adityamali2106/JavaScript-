function Accept(iNo1,iNo2)
{
	let iCnt = 0;

	if (iNo2 < 0)
	{
		iNo2 = -iNo2;
	}

	for (iCnt = 1; iCnt <= iNo2; iCnt++)
	{
		console.log(`${iNo1}`);
	}
}

function main()
{
	let iValue = 12;
	let iCount = -5;

	Accept(iValue,iCount);
}

main();
