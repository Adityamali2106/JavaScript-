function PrintEven(iNo)
{
	let iCnt = 0;

	if (iNo <= 0)
	{
		return;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++)
	{
		console.log(2 * iCnt);
	}
}

function main()
{
	let iValue = 8;

	PrintEven(iValue);
}

main();
