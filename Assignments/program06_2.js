function ChkGreater(iNo)
{
	if (iNo > 100)
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
	let iValue = 150;
	let bRet = false;

	bRet = ChkGreater(iValue);

	if (bRet) 
	{
		console.log("Greater")
	} 
	else 
	{
		console.log("Smaller")
	}
}

main();
