import { lambda } from "./aws.util";

export class RespUtil {
  public static formatResponse(body: string) {
    var response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      isBase64Encoded: false,
      multiValueHeaders: {
        "X-Custom-Header": ["My value", "My other value"],
      },
      body: body,
    };
    return response;
  }

  public static formatError(error: any): any {
    var response = {
      statusCode: error.statusCode,
      headers: {
        "Content-Type": "text/plain",
        "x-amzn-ErrorType": error.code,
      },
      isBase64Encoded: false,
      body: error.code + ": " + error.message,
    };
    return response;
  }
  // Use SDK client
  public static getAccountSettings() {
    return lambda.getAccountSettings().promise();
  }

  public static serialize(object: Object) {
    return JSON.stringify(object, null, 2);
  }
}
