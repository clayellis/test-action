const env = process.env;

console.log(`start`);
for (const key in env) {
    console.log(`${key}: ${env[key]}`);
}
console.log(`end`);
