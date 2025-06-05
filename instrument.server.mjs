import * as Sentry from "@sentry/react-router";

Sentry.init({
    dsn: "https://4355ed13a3ed3d41969103fb8a5b8442@o4509404838821888.ingest.de.sentry.io/4509404842819664",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});
