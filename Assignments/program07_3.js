function Display(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = -iNo; iCnt <= iNo; iCnt++) 
	{
		process.stdout.write(`${iCnt} \t`);
	}

	console.log();
}

function main()
{
	let iValue = 4;

	Display(iValue);
}

main();