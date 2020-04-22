# Use-Case Fabcont
## Application Code Description

- Relative Application Code Location: <b>fabcont(-appl)/javascript/</b>
- addCont.js [cnr] [vgm] [type] [status] [destination] [cargo] [location]
    - Adds a (public) container with given details to the ledger
- addPrivateCont.js [cnr] [vgm] [type] [status] [destination] [cargo] [location]
    - Adds a (private) container with given details to the ledger
- deleteCont.js [cnr]
    - Deletes a container with given container nr. from the ledger
- queryAll.js
    - Queries all public & private containers stored in the ledger
- queryAllPublic.js
    - Queries all public containers stored in the ledger
- queryAllPrivate.js
    - Queries all private containers stored in the ledger
- queryPrivate.js [cnr]
    - Queries the private container with the given container nr.
- queryPublic.js [cnr]
    - Queries the public container with the given container nr.
