function SquareMeter(iValue)
{
	let dArea = 0.0;
	
	dArea = iValue / 10.7639104;

	return dArea;
}

function main()
{
	let iValue = 7;
	let dRet = 0;

	dRet = SquareMeter(iValue);

	console.log(`${iValue} Square feet to Square Meter is : ${dRet}`);
}

main();