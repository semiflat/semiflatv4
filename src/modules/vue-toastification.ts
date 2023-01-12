import type { PluginOptions } from "vue-toastification";
import Toast from "vue-toastification";
import type { UserModule } from "~/types";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  // You can set your default options here
  timeout: 3000,
};

export const install: UserModule = ({ app }) => {
  app.use(Toast, options);
};
