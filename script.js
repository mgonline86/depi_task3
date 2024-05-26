function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return Object.values(data);
}

var allForms = [
    {
        id: "l1q1",
        func: (ns) => {
            const num1 = Number(ns[0]);
            let count = 1;
            let result = [];
            while (count <= num1) {
                result.push(count);
                count++;
            }
            return result.join(", ");
        }
    },
    {
        id: "l1q2",
        func: (ns) => {
            let num1 = Number(ns[0]);
            let result = [];
            while (num1 >= 1) {
                result.push(num1);
                num1--;
            }
            return result.join(", ");
        }
    },
    {
        id: "l1q3",
        func: (ns) => {
            const type = String(ns[0]);
            let = result = []
            let count;
            if (type === "odd") {
                count = 1;
            } else {
                count = 2;
            };
            while (count <= 100) {
                result.push(count);
                count += 2;
            }
            return result.join(", ");
        }
    },
    {
        id: "l2q1",
        func: (ns) => {
            const num1 = Number(ns[0]);
            let modulo = 10;
            let digits = 1;
            while (num1 % modulo !== num1) {
                digits++;
                modulo *= 10;
            }
            return digits;
        }
    },
    {
        id: "l2q2",
        func: (ns) => {
            let firstDigit = Math.abs(Number(ns[0]));
            const lastDigit = (firstDigit % 10);
            while (firstDigit >= 10) {
                firstDigit = Math.floor(firstDigit / 10);
            }
            return "First digit: " + firstDigit + " Last digit: " + lastDigit;
        }
    },
    {
        id: "l2q3",
        func: (ns) => {
            let num1 = Number(ns[0]);
            let num2 = Number(ns[1]);
            let sign = "-";
            let result = 0;
            if (num1 >= 0 && num2 >= 0 || num1 <= 0 && num2 <= 0) {
                sign = "";
            }
            num1 = Math.abs(num1);
            num2 = Math.abs(num2);
            for (let i = 0; i < num1; i++) {
                result += num2;
            }
            return sign + result;
        }
    },
    {
        id: "l2q4",
        func: (ns) => {
            const endSum = Number(ns[0]);
            let count = 0
            let sum = 0;
            while (sum < endSum) {
                count++;
                sum += count ** 2;
            }
            return count;
        }
    },
    {
        id: "l3q1",
        func: (ns) => {
            let num1 = ns[0];
            let num2 = ns[1];
            if (num1.length !== num2.length) {
                return "The numbers are not Mirrored";
            }
            num1 = Number(num1);
            num2 = Number(num2);

            let reverseNum1 = "";
            while (num1 % 10 !== 0) {
                reverseNum1 += num1 % 10;
                num1 = Math.floor(num1 / 10);
            }

            const result = Number(reverseNum1) === num2;
            if (result === true) {
                return "The numbers are Mirrored";
            }
            return "The numbers are not Mirrored";
        }
    },
    {
        id: "l3q2",
        func: (ns) => {
            let dice1 = Math.floor(Math.random() * 6) + 1;
            let dice2 = Math.floor(Math.random() * 6) + 1;
            const dice1Ele = document.getElementById("dice1");
            const dice2Ele = document.getElementById("dice2");
            dice1Ele.classList = "dice dice-" + dice1;
            dice2Ele.classList = "dice dice-" + dice2;

            const intervalId = setInterval(() => {
                dice1 = Math.floor(Math.random() * 6) + 1;
                dice2 = Math.floor(Math.random() * 6) + 1;
                dice1Ele.classList = "dice dice-" + dice1;
                dice2Ele.classList = "dice dice-" + dice2;

                if (dice1 === dice2) {
                    clearInterval(intervalId);
                }
            }, 200);
        }
    },
    {
        id: "l3q3",
        func: (ns) => {
            let input = Number(prompt("Enter a number:"));
            let randNumber = Math.floor(Math.random() * 10) + 1;
            while (input !== randNumber) {
                if (input === 0) {
                    return "Game over!";
                }
                input = Number(prompt("You guessed wrong!, try again:"));
                randNumber = Math.floor(Math.random() * 10) + 1;
            }
            return "You did it, the correct number is " + randNumber;
        }
    }
]

allForms.forEach(form => {
    const { id, func } = form;

    const formEl = document.getElementById(id);
    const outputEl = formEl.querySelector('.output');
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const values = getFormValues(formEl);
        const result = func(values);
        if (outputEl) {
            outputEl.innerHTML = result;
            outputEl.classList.add("an-z-out-in");
            setTimeout(() => {
                outputEl.classList.remove("an-z-out-in");
            }, 1000);
        }
    })
})