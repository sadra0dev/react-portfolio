export const apiVersion =
  process.env.REACT_APP_SANITY_API_VERSION || "2023-01-01";

export const dataset = assertValue(
  process.env.REACT_APP_SANITY_DATASET,
  "Missing environment variable: REACT_APP_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.REACT_APP_SANITY_PROJECT_ID,
  "Missing environment variable: REACT_APP_SANITY_PROJECT_ID"
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

export const previewSecretDocumentId = "preview.secret";

export const useCdn = false;

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
