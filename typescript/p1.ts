import fs from "fs/promises";
const processData = async () => {
    const data = await fs.readFile("input.txt", {encoding: "utf-8"});
   return Buffer.from(data);
}
const sum = (arr: string[]) => {
    return arr.reduce((prev, curr) => Number(prev) + Number(curr), 0)
}
(async () => {
    const data = (await processData()).toString("utf-8").split(/\n\s*\n/);
   const sums = data.map(element => sum(element.split("\n")))
   console.log(Math.max(...sums))
   // for top three
   const SumTopThree = sums.sort((a,b) => b - a).splice(0,3).reduce((prev, curr) => prev + curr, 0);
   console.log(SumTopThree)
})()