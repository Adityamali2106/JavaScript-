function Number(iNo)
{
	if (iNo < 50)								
	{
		console.log("Small");
	}
	else if (iNo < 100)								
	{
		console.log("Medium");
	}
	else
	{
		console.log("Laege");
	}	
}

function main()
{
	let iValue = 75;

	Number(iValue);
}

main();