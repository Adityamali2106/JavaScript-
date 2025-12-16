function DisplayFactor(iNo)
{
	let iCnt = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = Math.floor(iNo/2); iCnt >= 1; iCnt--)
	{
		if((iNo % iCnt) == 0)
		{
			console.log(iCnt);
		}
	}
}

function main()
{
	let iValue = 24;

	DisplayFactor(iValue);
}

main();
