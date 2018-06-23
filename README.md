# homeroom

## database

- [ ] Classrooms -> Classes
- [ ] Should Classroom support multiple teachers out of the box? (Yeah, let's add it!)
- [x] Follow type
  - pro: Subscriptions (notifications)
  - con: New type
  - pro: easier count

## server

- [x] Move Auth0 to Express middleware?
- [ ] Prioritise Apollo Server Upload
- [ ] Siltently check every time user connects and create new one?
- [x] Keep createUser + Viewer requires setup.
- [x] Query
- [ ] Mutation
- [ ] Connect Stripe via Webhooks?
  - pro: More data, less hacking
  - con: separated, more lambdas
  - pro: OSS we could make a BaaS for Stripe (webhooks)
- [ ] Move file remove / file management to Webhook
  - pro: more transparent
  - pro: more easily applied to multiple situations.
  - con: I see no con tbh

## www

- [ ] Helmet + SEO
- [x] NextJS
- [x] Renamed Homeroom page to Explore - I feel like it better portrays its prupose. Cool!
- [x] Enforced Signup? -> NO!
- [x] SEO Apollo pattern. Current idea is to add `seo` or something which would get Helmet data but would still require Signup once opened. - You don't need that, just set errorPolicy to ignore whenever requesting `viewer` to prevent unpredicted crashes. Data is still loaded as expected.
- [ ] `withApollo` - component specific?
- [ ] Setup section in Signup. Basic rights, termsofuse, agreement, notifications. I feel like it's nice intro. Might be to overwhelming. Seems like a must to make smooth signup process.
- [ ] Email verificaiton before completing setup?

## stream
