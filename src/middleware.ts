import errorHandler from './utils/errorHandler';
import app from "./router/route";

app.addHook('onError', (req, res, err, done) => {
    errorHandler(err, req, res);
    done();
});

export default app