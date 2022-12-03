import fs from "fs/promises";
const processData = async () => {
  const data = await fs.readFile("typescript/input3.txt", {
    encoding: "utf-8",
  });
  return Buffer.from(data);
};

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const map = alpha.split("");

const check_repeat = (
  firstSet: Array<string>,
  secondSet: Array<string>
): number => {
  for (let element in firstSet) {
    if (secondSet.indexOf(firstSet[element]) !== -1)
      return map.indexOf(firstSet[element]) + 1;
  }
  return 0;
};

(async () => {
  const data = (await processData()).toString("utf-8").split("\n");
  let sum = 0;
  data.forEach((element) => {
    let firstHalf = [...new Set(element.slice(0, element.length / 2))];
    let secondHalf = [...new Set(element.slice(element.length / 2))];
    sum += check_repeat(firstHalf, secondHalf);
  });
  console.log(sum);
})();
