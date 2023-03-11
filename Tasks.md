### Requirements

- No base language
- Creating of any key should populate other languages string --namespace-key-please-set-thevalue
- Add language version table
- Adding new namespace should add same namespace to all langugaes
- Any changes on namespace or translations table should update language version
- Full text search on translations values

### API:

- [ ] every endpoint must have language code in query or payload ex lang_code(en-US)
- [ ] there should be endpoint for languge options (pre defined list)

### Endpoints

- [ ] get language version
- [ ] get list of languages paginate
- [ ] get keys for given language should have namespace (ex common) sort from newest
- [ ] create new language
- [ ] create new namespace
- [ ] create new key value
- [ ] update namespace
- [ ] update keys
- [ ] update values
- [ ] disable language
- [ ] delete namespace
- [ ] delete key

### Improvments

- Authentification
- File System
- Multiple databases support
- Redis
