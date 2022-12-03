import fs from "fs/promises";
const processData = async () => {
  const data = await fs.readFile("typescript/input3.txt", {
    encoding: "utf-8",
  });
  return Buffer.from(data);
};

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const map = alpha.split("");

const check_repeat = (set: Array<string>): number => {
  console.log(set);
  const firstSet = set[0].split("");
  const secondSet = set[1].split("");
  const thirdSet = set[2].split("");

  for (let element in firstSet) {
    if (
      secondSet.indexOf(firstSet[element]) !== -1 &&
      thirdSet.indexOf(firstSet[element]) !== -1
    )
      return map.indexOf(firstSet[element]) + 1;
  }
  return 0;
};

(async () => {
  const data = (await processData()).toString("utf-8").split("\n");
  let sum = 0;
  let arrays = [];
  let numbers = [];
  while (data.length > 0) {
    arrays.push(data.splice(0, 3));
  }
  arrays.forEach((group) => {
    numbers.push(check_repeat(group));
  });
  console.log(numbers.reduce((a, b) => a + b, 0));
})();
