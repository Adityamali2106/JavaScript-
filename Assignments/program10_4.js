function FhtoCs(fTemp)
{
	let dArea = 0.0;
	
	dArea = ((fTemp-32) * 5 / 9);

	return dArea;
}

function main()
{
	let fValue = 34;
	let dRet = 0;

	dRet = FhtoCs(fValue);

	console.log(`${fValue} Fahrenheir in Celsics is ${dRet}`);
}

main();