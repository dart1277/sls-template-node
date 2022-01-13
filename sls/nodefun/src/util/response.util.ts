import { APIGatewayProxyResult } from 'aws-lambda';
import { PromiseResult } from 'aws-sdk/lib/request';
import { lambda } from './aws.util';
import { AWSError, Lambda } from 'aws-sdk';

export class RespUtil {
  public static formatResponse(body: string): APIGatewayProxyResult {
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      isBase64Encoded: false,
      multiValueHeaders: {
        'X-Custom-Header': ['My value', 'My other value'],
      },
      body,
    };
    return response;
  }

  public static formatError(error: any): APIGatewayProxyResult {
    const response = {
      statusCode: error.statusCode,
      headers: {
        'Content-Type': 'text/plain',
        'x-amzn-ErrorType': error.code,
      },
      isBase64Encoded: false,
      body: error.code + ': ' + error.message,
    };
    return response;
  }
  // Use SDK client
  public static getAccountSettings(): Promise<PromiseResult<Lambda.Types.GetAccountSettingsResponse, AWSError>> {
    return lambda.getAccountSettings().promise();
  }

  public static serialize(obj: object): string {
    return JSON.stringify(obj, null, 2);
  }
}
