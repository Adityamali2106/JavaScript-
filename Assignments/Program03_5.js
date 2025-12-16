function DisplayConvert(cValue)
{
	if(cValue == 'A' || cValue == 'E' || cValue == 'I' || cValue == 'O' || cValue == 'U' ||
		cValue == 'a' || cValue == 'e' ||cValue == 'i' ||cValue == 'o' || cValue == 'u' )
	{
		return true;
	}
	else 
	{
		return false;
	}
}

function main()
{
	let cValue = 'A';
	let bRet = false

	bRet = DisplayConvert(cValue);

	if (bRet)
	{
		console.log("It is Vowel");
	}
	else
	{
		console.log("It is not Vowel");
	}
}

main();