import type { FastifyInstance } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';

import createTransaction from '../controllers/transactions/createTransaction.controller';
import { deleteTransaction } from '../controllers/transactions/deleteTransaction.controller';
import getTransactions from '../controllers/transactions/getTransactions.controller';
import getTransactionsSummary from '../controllers/transactions/getTransactionsSummary.controller';
import {
  createTransactionSchema,
  deleteTransactionSchema,
  getTransactionSchema,
  getTransactionsSummarySchema,
} from '../schemas/transaction.schema';

const transactionsRoutes = async (fastify: FastifyInstance): Promise<void> => {
  //Criação
  fastify.route({
    method: 'POST',
    url: '/',
    schema: {
      body: zodToJsonSchema(createTransactionSchema),
    },
    handler: createTransaction,
  });

  //Buscar com filtros
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      querystring: zodToJsonSchema(getTransactionSchema),
    },
    handler: getTransactions,
  });

  //Buscar resumo
  fastify.route({
    method: 'GET',
    url: '/summary',
    schema: {
      querystring: zodToJsonSchema(getTransactionsSummarySchema),
    },
    handler: getTransactionsSummary,
  });

  //Deletar transação
  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: {
      params: zodToJsonSchema(deleteTransactionSchema),
    },
    handler: deleteTransaction,
  });
};

export default transactionsRoutes;
