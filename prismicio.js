/* eslint-disable valid-jsdoc */
import * as prismic from "@prismicio/client"
import * as prismicNext from "@prismicio/next"
import sm from "./sm.json"

export const repositoryName = new URL(sm.apiEndpoint).hostname.split(
	"."
)[0]

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
	if (doc.type === "page") {
		return `/${doc.uid}`
	}

	return "/"
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config = {}) => {
	const client = prismic.createClient(sm.apiEndpoint, {
		previewData: config?.previewData,
	})

	prismicNext.enableAutoPreviews({
		client,
		previewData: config?.previewData,
		req: config?.req,
	})

	return client
}
