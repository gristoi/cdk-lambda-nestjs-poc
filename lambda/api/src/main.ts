import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { INestApplication } from "@nestjs/common";
import { ApiModule } from "./api.module";
import { Express } from "express";

export async function createApp(
  expressApp: Express
): Promise<INestApplication> {
  const app = await NestFactory.create(
    ApiModule,
    new ExpressAdapter(expressApp)
  );

  return app;
}