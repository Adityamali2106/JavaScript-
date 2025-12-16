function Pattern(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++) 
	{
		process.stdout.write("$\t*\t");
	}

	console.log();
}

function main()
{
	let iValue = 5;

	Pattern(iValue);
}

main();