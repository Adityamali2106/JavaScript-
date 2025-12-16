function Table(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= 10; iCnt++) 
	{
			process.stdout.write(`${iNo * iCnt} \t`);
	}

	console.log();
}

function main()
{
	let iValue = 4;

	Table(iValue);
}

main();