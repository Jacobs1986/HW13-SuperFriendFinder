function diff(ary1, ary2) {
    let newAry = []
    for (var i = 0; i < ary1.length; i++) {
        newAry.push(Math.abs(ary1[i] - ary2[i]))
    }
    console.log(newAry);
    let totalDifference = 0
    for (var i=0; i < newAry.length; i++) {
        totalDifference = totalDifference + newAry[i];
    }
    return totalDifference;
}
var A = [5, 1, 4];
var B = [3, 2, 6]
console.log(diff(A, B)) // [1, 1, 0, -3]