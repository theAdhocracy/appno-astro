import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	""
);

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: SANITY_PROJECT_ID,
			dataset: SANITY_DATASET,
			useCdn: false,
		}),
	],
});
