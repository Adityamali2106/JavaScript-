function Display(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++) 
	{
		process.stdout.write(`${iCnt} \t`);
	}

	console.log();
}

function main()
{
	let iValue = 8;

	Display(iValue);
}

main();