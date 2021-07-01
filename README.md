# Power Apps Portals ALM Sample

This project provides a starting point for applying ALM best practices to your Power Apps Portals projects. It adopts two major tenets:

- Establish source control as the definitive source of truth
- Fully automate commits, builds, and deployments.

## Prerequisites

- A GitHub account
- Access to two existing Dataverse environments (one for "development" and one for "production")
  - **Note:** The environments do not both need to be in the same tenant.
  - One [Dataverse starter portal](https://docs.microsoft.com/en-us/powerapps/maker/portals/create-portal) provisioned in each environment
  - One [application user](https://docs.microsoft.com/en-us/power-platform/admin/manage-application-users) with the System Administrator role in each environment
    - **Note:** You can either use a single application user for both environments (if they are in the same tenant) or a separate application user for each environment.
- (Optional) [GitHub Enterprise](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-enterprise)

## Setup

1. Either fork this repository or [use it as a template](https://github.com/microsoft/power-apps-portals-alm/generate).
   - **Note:** Because this project uses [environments](https://docs.github.com/en/actions/reference/environments), you must create either a public repository or a private repository for GitHub Enterprise.
2. Set up the environments in your repository (outlined below):
   1. From your repository home page, click **Settings**.
   2. Click **Environments**.
   3. Click **New environment**.
   4. For the name, type _development_. Click **Configure environment**.
   5. Under **Environment secrets**, click **Add Secret**.
   6. For **Name**, type _URL_.
   7. For **Value**, provide the URL of your development environment, e.g. *https://my-awesome-dev.crm.dynamics.com/*.
   8. If you are using separate application users for each environment, or if you are using separate tenants, repeat steps v-vii to create the following secrets:
      - **APPLICATION_ID**: Application (client) ID of your application user, e.g. _01234567-89ab-cdef-0123-456789abcdef_
      - **CLIENT_SECRET**: A client secret for your application user, e.g. _1f7~GP48Pi17T-R.4uyIU7_kOiV2NCnH_Q_.
      - **TENANT_ID**: The Directory (tenant) ID that your development environment is provisioned in, e.g. _fedcba98-7654-3210-fedc-ba9876543210_.
   9. Repeat steps i-viii for your production environment.
3. If you are using a single application user for both environments, add its information to your repository as secrets (outlined below):
   1. In the left-hand navigation of your repository's Settings page, click **Secrets**.
   2. Click **New repository secret**.
   3. For **Name**, type _APPLICATION_ID_.
   4. For **Value**, provide the application (client) ID of your application user, e.g. _01234567-89ab-cdef-0123-456789abcdef_.
   5. Repeat steps ii-iv to create the following secrets:
      - **CLIENT_SECRET**: A client secret for your application user, e.g. _1f7~GP48Pi17T-R.4uyIU7_kOiV2NCnH_Q_.
      - **TENANT_ID**: The Directory (tenant) ID that your development environment is provisioned in, e.g. _fedcba98-7654-3210-fedc-ba9876543210_.
4. Run the **Provision Dev** workflow (outlined below):
   1. Click **Actions**.
   2. Click **Provision Dev**.
   3. Click **Run workflow** > **Run workflow**.
5. (Optional) Using the same steps outlined in step 4, run the **CI/CD** workflow.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
