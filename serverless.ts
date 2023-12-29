import main from '@/functions/main';
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'web-tool-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-api-gateway-caching'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      },
  },
  // import the function via paths
  functions: { main },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    apiGatewayCaching: {
      enabled: true,
      ttlInSeconds: 0,
      perKeyFlush: true,
    }
  },
};

module.exports = serverlessConfiguration;
