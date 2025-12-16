function FindMax(iNo1,iNo2)
{
	if (iNo1 > iNo2)
	{
		return iNo1;
	} 
	else 
	{
		return iNo2;
	}
}

function main()
{
	let iValue1 = 12, iValue2 = 36;
	let iRet = 0;

	iRet = FindMax(iValue1, iValue2);

	console.log(`${iRet} is a Maximum Number`);
}

main();
