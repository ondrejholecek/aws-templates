function IPv4_string_to_number(strbits) {
	let split = strbits.split('.', 4);
	let n = (
		parseFloat(split[0] * 16777216)   /* 2^24 */
		+ parseFloat(split[1] * 65536)    /* 2^16 */
		+ parseFloat(split[2] * 256)      /* 2^8  */
		+ parseFloat(split[3])
	);
	return n;
}

function IPv4_number_to_string(strnum) {
	let byte1 = (strnum >>> 24);
	let byte2 = (strnum >>> 16) & 255;
	let byte3 = (strnum >>>  8) & 255;
	let byte4 = strnum & 255;
	return (byte1 + '.' + byte2 + '.' + byte3 + '.' + byte4);
}

function IPv4_cidr_to_number(bits) {
	let n = BigInt(Math.pow(2, bits)-1);
	n = n << BigInt(32-bits);
	return parseFloat(n);
}

