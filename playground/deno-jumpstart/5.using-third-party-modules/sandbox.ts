import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "hello again ninjas";

const camel = camelCase(text); // helloAgainNinjas
const param = paramCase(text); // hello-again-ninjas
const pascal = pascalCase(text); // HelloAgainNinjas
const snake = snakeCase(text); // hello_again_ninjas

console.log(camel, param, pascal, snake);
