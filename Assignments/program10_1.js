function CircleArea(fRadius)
{
	let iArea = 0.0;
	if (fRadius < 0)
	{
		fRadius = -fRadius;
	}

	iArea = 3.14 * fRadius * fRadius;

	return iArea;
}

function main()
{
	let fValue = 10.4;
	let dRet = 0.0;

	dRet = CircleArea(fValue);

	console.log("Area if a Circle is : ",dRet);
}

main();