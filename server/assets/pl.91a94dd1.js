var data = {
  button: {
    about: "About",
    register: "Zarejestruj si\u0119",
    "try": "Try for Free"
  },
  "not-found": "Not found",
  forms: {
    phone: { label: "Phone number" },
    email: {
      label: "Email",
      invalid: "This email is invalid",
      exists: "This email has already been used",
      labelRegistration: "Your email address"
    },
    errors: {
      required: "This field is required",
      startDateAfterEndDate: "The start date must be before the end date"
    },
    firstName: {
      label: "First Name",
      placeholder: "John"
    },
    lastName: {
      label: "Last Name",
      placeholder: "Doe"
    }
  },
  copy: {
    copyBtn: "Copy",
    copyToast: "Copied to clipboard"
  },
  errors: {
    403: {
      error: "403 Access denied.",
      description: "You don\u2019t have access to view this page, if You think that the page was shown as error please contact our support.\n"
    },
    404: {
      error: "404 Page not found.",
      description: "Given page doesn't exists.\nIf You think that the page was shown as error please contact our support.\n"
    },
    general: "Server connection error. Please try again later.",
    oops: "oops! that shouldn't have happened"
  },
  toasts: { success: { general: "Success!" } },
  dialogStepDetails: {
    webinarSchedule: "Webinar\nschedule\n",
    yourDetails: "Your \ndetails\n",
    forwarded: "Your details will be forwarded to the webinar organizer.",
    powered: "Powered By attix"
  },
  dialogStepComplete: {
    thankYou: "Thank You For Registering for",
    hostedBy: "Hosted by",
    close: "Close tab",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    dmca: "DMCA"
  },
  registerToWebinar: {
    theHostListItem: { host: "Host" },
    theCounter: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      live: "LIVE NOW",
      joinEvent: "Join Event In Progress"
    },
    theWebinarDate: { more: "View more dates" }
  }
};
var button = data.button;
var forms = data.forms;
var copy = data.copy;
var errors = data.errors;
var toasts = data.toasts;
var dialogStepDetails = data.dialogStepDetails;
var dialogStepComplete = data.dialogStepComplete;
var registerToWebinar = data.registerToWebinar;
export {
  button,
  copy,
  data as default,
  dialogStepComplete,
  dialogStepDetails,
  errors,
  forms,
  registerToWebinar,
  toasts
};
