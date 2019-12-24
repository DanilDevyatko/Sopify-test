# ds-shopify-boilerplate

Shopify boilerplate based on source files from slate and parcel for the compiling.

Git boilerplate respository for the Shopify Themes.

##### macOS Installation

> brew tap shopify/shopify

> brew install themekit

### How to run

##### 1. Setup connection with Shopify shop

- create in root directory `config.yml` with the next content

```
development:
  password: [PRIVATE_APP_PASSWORD]
  theme_id: [THEME_ID]
  store: [SHOP-NAME].myshopify.com
  ignore_files:

```

##### 2. Install dependencies

> yarn

##### 3. Run development

> yarn watch

##### 3. Deploy changes

> yarn deploy

[Parsel Documentation](https://parceljs.org/getting_started.html)
