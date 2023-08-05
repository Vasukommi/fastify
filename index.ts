import app from "./src/middleware";

app.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.log(`[SERVER ERROR] ${error}`)
    }
    console.log(`Server is listening on port ${address}`);
})