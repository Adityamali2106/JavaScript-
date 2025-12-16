function DisplayConvert(cValue)
{
	if(cValue == cValue.toUpperCase())
	{
		console.log(cValue.toLowerCase());
	}
	else if(cValue == cValue.toLowerCase())
	{
		console.log(cValue.toUpperCase());
	}
}

function main()
{
	let cValue = 'F';

	DisplayConvert(cValue);
}

main();