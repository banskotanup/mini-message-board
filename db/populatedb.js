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
        host: "dpg-cv3hjqt6l47c73fe33dg-a",
        user: "sysadmin",
        database: "minimessageboard_loe0",
        password: "FgMVU2ETiepIoADG98YBRpq0wdmkrWDl",
        port: 5432,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done...");
}

main();