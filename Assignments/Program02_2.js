function Display(iNo)
{
	let iCnt = 0;

	iCnt = iNo;
	while(iCnt >= 1)
	{
		console.log("*");
		iCnt--;
	}
}

function main()
{
	let iValue = 10;

	Display(iValue);
}

main();
