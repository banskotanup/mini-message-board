const { Client } = require("pg");
const SQL = `
    CREATE TABLE messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        messages TEXT,
        created_at DATE DEFAULT NOW()
    );

    INSERT INTO messages (username, messages)
    VALUES ('Anup', 'Hi I am Anup')
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: "localhost",
        user: "sysadmin",
        database: "minimessageboard",
        password: "Stdy4drm",
        port: 5432,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done...");
}

main();