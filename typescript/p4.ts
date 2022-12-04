import fs from "fs/promises";
const processData = async () => {
  const data = await fs.readFile("typescript/input4.txt", {
    encoding: "utf-8",
  });
  return Buffer.from(data);
};
const getArrayNumber = (sections: string): Array<number> => {
  const nbrs = sections.split("-");
  const numbers = [];
  for (let index = Number(nbrs[0]); index <= Number(nbrs[1]); index++) {
    numbers.push(index);
  }
  return numbers;
};
const checkArrayEquality = (strings: Array<string>) => {
  const firstSection = getArrayNumber(strings[0]);
  const secondSection = getArrayNumber(strings[1]);
  console.log(firstSection, secondSection);
  return (
    firstSection.some(
      (element, index) =>
        element === secondSection[secondSection.indexOf(element)]
    ) ||
    secondSection.some(
      (element, index) =>
        element === firstSection[firstSection.indexOf(element)]
    )
  );
};
(async () => {
  const data = (await processData()).toString("utf-8").split("\n");
  let sum = 0;
  const pairs = data.map((pair) => {
    return pair.split(",");
  });
  pairs.forEach((element) => {
    if (checkArrayEquality(element)) sum++;
  });
  console.log(sum);
})();
