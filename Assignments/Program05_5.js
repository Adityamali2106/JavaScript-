function FindLargest(iNo1,iNo2,iNo3)
{
	let iTemp = 0;

	if (iNo1 >= iNo2)
	{
		if(iNo1 >= iNo3)
		{
			return iNo1;
		}
		else
		{
			return iNo3;
		}
	}
	else
	{
		if (iNo2 >= iNo3)
		{
			return iNo2;
		}
		else
		{
			return iNo3;
		}

	}
}
function main()
{
	let iValue1 = 36,iValue2 = 65,iValue3 = 23;
	let iRet = 0;

	iRet = FindLargest(iValue1,iValue2,iValue3);
	
	console.log(`${iRet} is a Maximum number`);
	
	iValue1 = 96;
	iRet = FindLargest(iValue1,iValue2,iValue3);

	console.log(`${iRet} is a Maximum number`);
}

main();
