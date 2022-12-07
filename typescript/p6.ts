import fs from "fs/promises";
const processData = async () => {
  const data = await fs.readFile("typescript/input6.txt", {
    encoding: "utf-8",
  });
  return Buffer.from(data);
};
const getSubArray = (array: Array<string>, index: number, count: number) => {
  const sub = [];
  let j = 0;
  for (let i = index; j < count; j++) {
    sub.push(array[i]);
    i++;
  }
  return sub;
};
const getMarker = (data: Array<string>) => {
  for (let index = 0; index < data.length; index++) {
    let chunk = getSubArray(data, index, 14);

    if ([...new Set(chunk)].length === chunk.length) return index + 14;
  }
  return 0;
};
(async () => {
  const data = (await processData()).toString("utf-8").split("");
  console.log(getMarker(data));
})();
