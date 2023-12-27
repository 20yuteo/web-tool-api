import { handlerPath } from '@/libs/handler-resolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'ANY',
        cors: {
          origin: "*",
          headers: [
            "Content-Type",
            "X-Amz-Date",
            "Authorization",
            "X-Api-Key",
            "X-Amz-Security-Token",
            "X-Amz-User-Agent",
            "X-Client-Version",
            "X-Client-Path"
          ]
        },
        path: '/{proxy+}',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
