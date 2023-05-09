import { StudioLayout, StudioProvider, defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";

const Logo = ({ renderDefault, ...props }) => {
  return renderDefault({ ...props, title: "Protfolio" });
};

const config = defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema: {
    types: schema,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});

export default function StudioPage() {
  return (
    <div style={{ height: "100vh" }}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </div>
  );
}
