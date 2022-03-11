import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI, { Request, Response } from 'lambda-api';

import { corsMiddleware } from '../middlewares/cors';

const api = createAPI({});

api.post('/firsts', async (req: Request, res: Response) => {
  console.log({ body: req.body });
  const { broadcaster, viewer } = req.body;
  console.log({ broadcaster, viewer });
  res.status(200).json({ broadcaster, viewer });
});

api.get('/firsts/:broadcaster/:viewer', async (req: Request, res: Response) => {
  return { status: 'ok' };
});

api.use(corsMiddleware);

export const handler = async (event: APIGatewayEvent, context: Context) => {
  return api.run(event, context);
};
