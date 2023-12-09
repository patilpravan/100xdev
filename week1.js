const res = "asb as - 123 + as12*  sad/5"
  .split(/[-+/*//]/)
  .filter((ele) => !isNaN(ele))
  .map((ele) => ele.trim());
console.log(res);
console.log(!isNaN("1+2*3+4-(4+5)+(9-2)"));
console.log(
  "123+ 32 * (8 -90)".split(/(\s+|\b)/).filter((ele) => ele != " " && ele != "")
);
