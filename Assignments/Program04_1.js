function MultFact(iNo)
{
	let iCnt = 0;
	let iMult = 1;

	if (iNo < 0)
	{
		iNo = -iNo;
	}

	for (iCnt = 1; iCnt <= Math.floor(iNo/2); iCnt++)
	{
		if((iNo % iCnt) == 0)
		{
			iMult = iMult * iCnt;
		}
	}

	return iMult;
}

function main()
{
	let iValue = 12;
	let iRet = 0;

	iRet = MultFact(iValue);

	console.log(`${iValue} its factors Multipletion is ${iRet}`)

	iValue = 13; 
	iRet = MultFact(iValue);

	console.log(`${iValue} its factors Multipletion is ${iRet}`)
}

main();
