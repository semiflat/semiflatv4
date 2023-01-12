import { useToast as useToastification } from "vue-toastification";
import AppToastError from "~/components/toasts/AppToastError.vue";
import AppToastSuccess from "~/components/toasts/AppToastSuccess.vue";
import { t } from "~/i18n";

export function useToast() {
  const toast = useToastification();
  const errorToast = (message = t("errors.general"), options?: any) =>
    toast(
      {
        component: AppToastError,
        props: {
          content: message,
        },
      },
      {
        toastClassName: "app-toast-wrap app-toast-error-wrap",
        bodyClassName: "app-toast-body app-toast-error-body",
        hideProgressBar: true,
        ...options,
      }
    );
  const successToast = (message = t("toasts.success.general"), options?: any) =>
    toast(
      {
        component: AppToastSuccess,
        props: {
          content: message,
        },
      },
      {
        toastClassName: "app-toast-wrap app-toast-success-wrap",
        bodyClassName: "app-toast-body app-toast-success-body",
        hideProgressBar: true,
        ...options,
      }
    );

  return { errorToast, successToast, toast };
}
