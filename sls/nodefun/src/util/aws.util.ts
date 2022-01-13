const AWSXRay = require('aws-xray-sdk-core');
AWSXRay.setContextMissingStrategy(() => {});
export const AWS = AWSXRay.captureAWS(require('aws-sdk'));

export const lambda = new AWS.Lambda();
