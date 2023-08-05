import Fastify from "fastify"
const app = Fastify({ logger: true });
app.log.level = 'error';
import getAccountDetails from "../controller/accounts";

app.get("/", getAccountDetails);

export default app