#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LamdaPocStack } from '../lib/lamda-poc-stack';

const app = new cdk.App();
new LamdaPocStack(app, 'LamdaPocStack');
