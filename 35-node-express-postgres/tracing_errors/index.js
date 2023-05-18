const { LOG_LEVEL = "info" } = process.env;

const loggerMiddleware = require("pino-http")({
    level: LOG_LEVEL
});
  
const app = require("express")();
  
app.use(loggerMiddleware);
  
app.get("/sum/:input1/:input2", (req, res, next) => {
    const methodName = "sum";
    req.log.debug({ __filename, methodName });
  
    const input1 = Number(req.params.input1);
    const input2 = Number(req.params.input2);
    const result = input1 + input2;
  
    res.json({ data: result });
    req.log.trace({ __filename, methodName, return: true, data: result });
});

app.listen(8000, ()=> console.log("good ol java"));