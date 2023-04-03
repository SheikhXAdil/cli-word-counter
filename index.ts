#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner"



const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

let words: number = 0
let characters: number = 0


const welcome = async () => {
    console.clear()
    const rainbowTitle = chalkAnimation.rainbow(
        'Welcome to the word counter \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(chalk.greenBright('Hi!!!'));
    console.log("I am a word counter. Enter some text to know the number of characters and words in it :)\n")



}

let counter = (text: string): void => {
    if (text !== "") {

        let textArr: string[] = text.split(/\s+/ig)
        words = textArr.length

        text = text.replace(/[^A-Z0-9]+/ig, '')
        characters = text.length

        console.log(`\nThe number of ${chalk.blueBright("words")} in your text are ${chalk.yellow(words)} and the number of ${chalk.blueBright("characters")} are ${chalk.yellow(characters)}`)

    } else {
        console.log(chalk.red("Please enter some text"))
        app()
    }
}

const app = async () => {

    const answer = await inquirer.prompt({
        name: 'text',
        type: 'input',
        message: 'Enter the text here:',
    });
    let text: string = answer.text

    const spinner = createSpinner('Counting...').start();
    await sleep();
    spinner.stop()
    counter(text)

}

await welcome()
await app()


