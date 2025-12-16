function Diaplay(iNo)
{
	let iCnt = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++) 
	{
		process.stdout.write("*\t");
	}

	for (iCnt = 1; iCnt <= iNo; iCnt++) 
	{
		process.stdout.write("#\t");
	}

	console.log();
}

function main()
{
	let iValue = 5;

	Diaplay(iValue);
}

main();