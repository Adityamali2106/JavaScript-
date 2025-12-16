function Check(iNo)
{
	if ((iNo % 5) == 0)
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
	let iValue = 50;
	let bRet = false;

	bRet = Check(iValue);

	if (bRet)
	{
		console.log(`${iValue} is Divisible by 5`);		
	}
	else
	{
		console.log(`${iValue} is Not Divisible by 5`);		
	}
}

main();
