/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/



job("Run ") {
  container(displayName = "Run publish script", image = "node:18-alpine") {
    env["CLOUDFLARE_API_TOKEN"] = Secrets("cloudflare_api_token_prod")
    env["CLOUDFLARE_ACCOUNT_ID"] = Params("cloudflare_account_id_prod")

    shellScript {
      interpreter = "/bin/sh"
      content = """
                export BRANCH=${'$'}(echo ${'$'}JB_SPACE_GIT_BRANCH | cut -d'/' -f 3)
                echo Install pnpm dependencies...
                npx pnpm i --store=node_modules/.pnpm-stored
                npx pnpm deploy
            """
    }
  }
}
