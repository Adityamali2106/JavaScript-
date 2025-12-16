function KMtoMeter(iNo)
{
	let iMeter = 0;
	if (iNo < 0)
	{
		iNo = -iNo;
	}

	iMeter = iNo * 1000;

	return iMeter;
}

function main()
{
	let fValue = 12;
	let dRet = 0;

	dRet = KMtoMeter(fValue);

	console.log("Area if a Circle is : ",dRet);
}

main();