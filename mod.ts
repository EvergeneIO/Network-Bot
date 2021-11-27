//Migrations
const migration = Deno.run({
  cmd: [
    "deno",
    "run",
    "--allow-read",
    "--allow-net",
    "--allow-env",
    "--unstable",
    "--no-check",
    "https://deno.land/x/nessie@2.0.0/cli.ts",
    "migrate",
  ],
});

await migration.status();
