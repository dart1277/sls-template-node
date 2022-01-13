// https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/blank-nodejs/function/index.js

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Callback,
  Context,
  Handler,
  ALBEvent,
  ALBResult,
  ALBHandler,
} from 'aws-lambda';
import { RespUtil } from './util/response.util';

// Handler
// export const handler : ALBHandler = async (event: ALBEvent) : Promise<ALBResult> => {
export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log('## ENVIRONMENT VARIABLES: ' + RespUtil.serialize(process.env));
  console.log('## CONTEXT: ' + RespUtil.serialize(context));
  console.log('## EVENT: ' + RespUtil.serialize(event));
  try {
    const accountSettings = await RespUtil.getAccountSettings();
    return RespUtil.formatResponse(RespUtil.serialize(accountSettings.AccountUsage as object));
  } catch (error: any) {
    return RespUtil.formatError(error);
  }
};
