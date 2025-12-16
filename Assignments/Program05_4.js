function PrintEven(iNo)
{
	let iCnt = 0;

	if (iNo < 0)
	{
		console.log("Negative")
	}
	else if(iNo > 0)
	{
		console.log("Positive")
	}
	else
	{
		console.log("Zero");
	}

}

function main()
{
	let iValue = 36;

	PrintEven(iValue);
	
	iValue = 0;
	PrintEven(iValue);
}

main();
