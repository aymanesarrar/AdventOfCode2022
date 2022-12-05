import fs from "fs/promises";
const processData = async () => {
  const data = await fs.readFile("typescript/input5.txt", {
    encoding: "utf-8",
  });
  return Buffer.from(data);
};
interface Stacks {
  [key: number]: string[];
}
interface lineParsed {
  quantity: number;
  from: number;
  to: number;
}
const parseLine = (str: string): lineParsed => {
  const splits = str.split(" ");
  return {
    quantity: Number(splits[1]),
    from: Number(splits[3]),
    to: Number(splits[5]),
  };
};

const stacks: Stacks = {
  1: ["H", "B", "V", "W", "N", "M", "L", "P"],
  2: ["M", "Q", "H"],
  3: ["N", "D", "B", "G", "F", "Q", "M", "L"],
  4: ["Z", "T", "F", "Q", "M", "W", "G"],
  5: ["M", "T", "H", "P"],
  6: ["C", "B", "M", "J", "D", "H", "G", "T"],
  7: ["M", "N", "B", "F", "V", "R"],
  8: ["P", "L", "H", "M", "R", "G", "S"],
  9: ["P", "D", "B", "C", "N"],
};

const manipulateStacks = (stacks: Stacks, lineParsed: lineParsed[]) => {
  for (let element of lineParsed) {
    for (let i = 0; i < element.quantity; i++) {
      stacks[element.to.toString()].push(
        stacks[element.from.toString()].at(-1)
      );
      stacks[element.from.toString()].pop();
    }
  }
};
const getKey = (stacks: Stacks) => {
  let str = "";
  for (let element in stacks) {
    str += stacks[element].at(-1);
  }
  return str;
};
(async () => {
  const data = (await processData()).toString("utf-8").split("\n");
  const instructions = [];
  for (let element of data) {
    instructions.push(parseLine(element));
  }
  manipulateStacks(stacks, instructions);
  console.log(getKey(stacks));
})();
