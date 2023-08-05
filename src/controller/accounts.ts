import { FastifyRequest, FastifyReply } from 'fastify';

const getAccountDetails = (req: FastifyRequest, res: FastifyReply) => {
    try {
        res.status(200).send({ AccountId: 1 });
    } catch (error: any) {
        console.log(error.message);
    }
};

export default getAccountDetails;