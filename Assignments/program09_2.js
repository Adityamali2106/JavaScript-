function DollarToINR(iNo)
{
	return iNo * 70;
}

function main()
{
	let iValue = 10;
	let iRet = 0;

	iRet = DollarToINR(iValue);

	console.log("Value in INR is : ",iRet);
}

main();