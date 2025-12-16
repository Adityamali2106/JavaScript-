function Multiply(iNo1,iNo2,iNo3)
{
	if ((iNo1 == 0) && (iNo2 == 0) && (iNo3 == 0))				// All three vriables are zero then return 0
	{
		return 0;
	}

	if (iNo1 == 0)								
	{
		iNo1 = 1;
	}
	
	if (iNo2 == 0)								
	{
		iNo2 = 1;
	}
	
	if (iNo3 == 0)								
	{
		iNo3 = 1;
	}
	
	return iNo1 * iNo2 * iNo3;
}

function main()
{
	let iValue1 = 5, iValue2 = 4, iValue3 = 7;
	let iRet = 0;

	iRet = Multiply(iValue1, iValue2,iValue3);

	console.log("Multiplication is : ", iRet);
}

main();
