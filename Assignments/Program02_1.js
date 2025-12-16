function Display(iNo)
{
	let iCnt = 0;

	iCnt = 1;
	while(iCnt <= iNo)
	{
		console.log("*");
		iCnt++;
	}
}

function main()
{
	let iValue = 10;

	Display(iValue);
}

main();
