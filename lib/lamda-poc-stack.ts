import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import * as gateway from "@aws-cdk/aws-apigateway";
export class LamdaPocStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const layer = new lambda.LayerVersion(this, "PocLayer", {
      code: lambda.Code.fromAsset("lambda/api/node_modules"),
      compatibleRuntimes: [
        lambda.Runtime.NODEJS_12_X,
        lambda.Runtime.NODEJS_10_X,
      ],
    });
  const pocLambda = new lambda.Function(this, "PocHandler", {
    runtime: lambda.Runtime.NODEJS_12_X,
    code: lambda.Code.fromAsset("lambda/api/dist"),
    handler: "index.handler",
    layers: [layer],
    environment: {
      NODE_PATH: "$NODE_PATH:/opt",
    },
  });

  new gateway.LambdaRestApi(this, "PocApi", {
    handler: pocLambda,
  });
      }
}
