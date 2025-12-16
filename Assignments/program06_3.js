function ChkEqual(iNo1,iNo2)
{
	if (iNo1 == iNo2)
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
	let iValue1 = 10, iValue2 = 10;
	let bRet = false;

	bRet = ChkEqual(iValue1, iValue2);

	if (bRet) 
	{
		console.log("Equal")
	} 
	else 
	{
		console.log("Not Equal")
	}
}

main();
