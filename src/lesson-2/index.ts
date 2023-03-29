import * as readline from "readline";
import {calculation} from "./helper/calculation";

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const TRUE = true;

const request = () =>
    new Promise((resolve) => {
        readlineInterface.question("> ", (answer: string) => {

            try {
                calculation(answer);
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.message);
                } else {
                    console.error(JSON.stringify(e));
                }
            }

            resolve(null);
        });
    });

async function run() {
    while (TRUE) {
        await request();
    }
}

run()
    .catch(e => console.error(e.message));