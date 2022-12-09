import pg from "pg";
import {db} from "../config/index";

export const pool = new pg.Pool({
    connectionString: db.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
