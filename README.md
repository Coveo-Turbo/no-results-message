# NoResultsMessage

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

The NoResultsMessage simply displays a message when no results are present. To modify the message displayed, just use the `data-text` option as such:

```html
 <div class="CoveoNoResultsMessage" data-text="My Custom message here"></div>
```

A different message can also be specified for a list of tabs or exluded for a list of tabs. To specify different messages by tabs, just use the `tabs` and `notTabs` options as follows.

The message will only show when there are no results on Tab1 or Tab2.

```html
 <div class="CoveoNoResultsMessage" data-text="My Custom message here" data-tabs="Tab1, Tab2"></div>
```

The message will show on all tabs except on Tab1 and Tab2.

```html
 <div class="CoveoNoResultsMessage" data-text="My Custom message here" data-not-tabs="Tab1, Tab2"></div>
```

## Getting Started

1. Install the component into your project.

```
npm i @coveops/no-results-message
```

2. Use the Component or extend it

Typescript:

```javascript
import { NoResultsMessage, INoResultsMessageOptions } from '@coveops/no-results-message';
```

Javascript

```javascript
const NoResultsMessage = require('@coveops/no-results-message').NoResultsMessage;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/no-results-message'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/no-results-message@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoNoResultsMessage"></div>
```

## Extending

Extending the component can be done as follows:

```javascript
import { NoResultsMessage, INoResultsMessageOptions } from "@coveops/no-results-message";

export interface IExtendedNoResultsMessageOptions extends INoResultsMessageOptions {}

export class ExtendedNoResultsMessage extends NoResultsMessage {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`
