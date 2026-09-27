# ReleaseGuard GitHub Remediation Demo

A deliberately small Node.js repository for testing ReleaseGuard's public GitHub repository workflow.

## Intentional finding

`src/config.js` contains:

```js
const API_KEY = "demo-only-not-a-secret";
```

The value is a **synthetic demo sentinel only**. It is not a real credential.

ReleaseGuard should detect this as a hardcoded credential/configuration finding.

## Expected remediation

Replace the hardcoded sentinel with an environment reference:

```js
const API_KEY = process.env.API_KEY;
```

No real secret should be added.

## Validation

```bash
npm run build
npm test
```

Both commands should pass before and after the remediation.
