function CheckLeapYear(iYear)
{
	if ((iYear % 4) == 0 || (iYear % 400) == 0 || (iYear % 100) != 0)
	{
		console.log(`${iYear} is a Leap Year`);
	} 
	else 
	{
		console.log(`${iYear} is Not a Leap Year`);
	}
}

function main()
{
	let iValue = 2000;

	CheckLeapYear(iValue);
}

main();
