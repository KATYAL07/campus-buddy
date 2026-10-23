import readline from 'node:readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const answer = await rl.question('Type RESET-CAMPUS-BUDDY to wipe and reseed the production database: ');
rl.close();
if (answer !== 'RESET-CAMPUS-BUDDY') { console.log('Database reset cancelled.'); process.exit(1); }
console.log('Reset requires the Supabase SQL editor or a configured admin client. No database was changed by this local demo script.');
