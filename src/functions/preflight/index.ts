import { handlerPath } from "@/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "OPTIONS",
        cors: {
          origins: ["https://wtc.meet-app.link", "localhost:3000"],
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
        path: "/{proxy+}"
      }
    },
  ],
}