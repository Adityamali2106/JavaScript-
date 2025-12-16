function OddDisplay(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++) 
	{
		if ((iCnt % 2) != 0)
		{
			process.stdout.write(`${iCnt} \t`);
		}
	}

	console.log();
}

function main()
{
	let iValue = 18;

	OddDisplay(iValue);
}

main();