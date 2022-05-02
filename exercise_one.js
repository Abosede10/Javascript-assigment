/*
    Create a function with a function name printSum( ) and print the sum of an array.
*/

function printSum(array)
{
    let sum = 0;

    for (i = 0; i < array.length; i++)
    {
        sum = sum + array[i]
    }
    console.log(sum)
}
printSum([1,2,4,5,6,7,6])

/*

Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.

*/

let totalScores = []

function comparedPoints(alice, bob)
{
    let alice_points = 0
    let bob_points = 0

    if(alice[0] > bob[0]){
        alice_points++
    }
    else if(alice[0] < bob[0]){
        bob_points++
    }
    if(alice[1] > bob[1] ){
        alice_points++
    }
    else if(alice[1] < bob[1]){
       bob_points++
    }
    if(alice[2] > bob[2] ){
        alice_points++
    }
    else if(alice[2] < bob[2]){
       bob_points++
    }
    if(alice[0] === bob[0] || alice[1] === bob[1] || alice[2] === bob[2])
    {
        alice_points
        bob_points
    }
    
//    totalScores = [alice_points, bob_points]
   totalScores = [`Alice's total point is = ${alice_points} `, `Bob's total points is =  ${bob_points} `]

    console.log(totalScores)
}
comparedPoints([3,5,1], [1, 4, 3])



/*
        Given an array of integers, calculate the ratio of its elements that are positive, negative and zero.
      Print the decimal value of each fraction on a new line with places after the decimal.

*/

let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;

function ratio(array)
{
    for(i = 0; i < array.length; i++)
    {
        if(array[i] > 0)
        {
            positiveNumbers++;
        }
        if(array[i] < 0)
        {
            negativeNumbers++;
        }
        if(array[i] === 0)
        {
            zero++;
        }
    }
    console.log(parseFloat(positiveNumbers / array.length))
    console.log(parseFloat(negativeNumber / array.length))
    console.log(parseFloat(zero / array.length))
}
ratio([5,40,-3,4,-23,1, 0])


/*
Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

*/

function firstFunction(num1, num2 )
{
    let sum = num1 + num2;
    return sum;


}
console.log(firstFunction(4,56))
