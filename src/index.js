module.exports = function toReadable(number) {
    let a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    console.log(typeof number);
    let str = number.toString();

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return a[number];
    }

    if (str.length === 2) {
        if ((str[1] === "0")) {
            return b[str[0]];
        }
        return b[str[0]] + " " + a[str[1]];
    }

    if (str.length === 3) {
        if (str[1] === "0" && str[2] === "0") {
            return a[str[0]] + " hundred";
        }
        if (str[1] === "0") {
            return a[str[0]] + " hundred " + a[str[2]];
        }
        if (parseInt(str[1] + str[2]) < 20) {
            return a[str[0]] + " hundred " + a[parseInt(str[1] + str[2])];
        }
        if (str[2] === "0") {
            return a[str[0]] + " hundred " + b[str[1]];
        }
        return a[str[0]] + " hundred " + b[str[1]] + " " + a[str[2]];
    }
};
