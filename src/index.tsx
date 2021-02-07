import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

Sentry.init({
	dsn:
		"https://e080e9ddc1b54d8c8ec1f9d9ecb5f180@o517563.ingest.sentry.io/5626934",
	integrations: [new Integrations.BrowserTracing()],

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 0.8,
})

ReactDOM.render(<App />, document.getElementById("root"))

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
