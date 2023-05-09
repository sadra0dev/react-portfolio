import { StudioLayout, StudioProvider, defineConfig } from "sanity";
import { apiVersion, dataset, projectId } from "./env";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import schema from "./schema";

const logo = ({ renderDefault, title, ...props }) => {
  return (
    <div title={title}>{renderDefault({ ...props, title: "Protfolio" })}</div>
  );
};

const config = defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  studio: {
    components: { logo },
  },
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});

export function Admin() {
  return (
    <div style={{ height: "100vh" }}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </div>
  );
}
