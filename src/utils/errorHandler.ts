import { FastifyRequest, FastifyReply } from 'fastify';

const errorHandler = (error: any, req: FastifyRequest, res: FastifyReply) => {
    try {
        res.status(500).send({ message: error.message });
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
}

export default errorHandler