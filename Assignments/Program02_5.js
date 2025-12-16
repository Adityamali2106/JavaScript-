function ChkEven(iNo)
{
	if ((iNo % 2) == 0)
	{
		return true;
	} 
	else 
	{
		return false;
	}
}

function main()
{
	let iValue = 12;
	let bRet = false;

	bRet = ChkEven(iValue);

	if (bRet)
	{
		console.log(`${iValue} is Even Number`);
	} 
	else 
	{
		console.log(`${iValue} is Odd Number`);
	}
}

main();
