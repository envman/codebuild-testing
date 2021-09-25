import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';

export class BuildStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log('test')

    const lambda = new NodejsFunction(this, 'ok', {
      
    })

    const api = new LambdaRestApi(this, 'api', {
      handler: lambda
    }) 
  }
}
