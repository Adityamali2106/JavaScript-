function PrintEven(iNo)
{
	let iCnt = 0;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= Math.floor(iNo/2); iCnt++)
	{
		if((iNo % iCnt) == 0 && (iCnt % 2) == 0)
		{
			console.log(iCnt);
		}
	}
}

function main()
{
	let iValue = 36;

	PrintEven(iValue);
}

main();
