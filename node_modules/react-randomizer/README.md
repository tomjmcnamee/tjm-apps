## React Randomizer

https://www.npmjs.com/package/react-randomizer

## Install

`npm install --save react-randomizer`

## Information

`Randomizer.randomNumber(num1, num2)`: generates a random number between `num1` and `num2`

`Randomizer.randomizeArray(arr)`: shuffles the input array in a random order

`Randomizer.rollDice()`: gives you a random number between 2-12(probability is consistent with rolling two dice)

## Example Use Cases

```js
import Randomizer from 'react-randomizer';

Randomizer.randomNumber(1,100) // => generates a random number between 1 and 100

Randomizer.randomizeArray([1,2,3,4,5]) // => [5,3,2,4,1]

Randomizer.rollDice() // => generates a random number between 2-12

```
