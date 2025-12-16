function RectArea(fWidth,fHight)
{
	let iArea = 0.0;
	if (fWidth < 0 )
	{
		fWidth = -fWidth;
	}
	else if(fHight < 0)
	{
		fHight = -fHight;
	}

	iArea = fWidth * fHight;

	return iArea;
}

function main()
{
	let fValue1 = 5.3, fValue2 = 9.78;
	let dRet = 0.0;

	dRet = RectArea(fValue1,fValue2);

	console.log("Area if a Rectangle is : ",dRet);
}

main();