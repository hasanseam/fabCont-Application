# Hyperledger Fabric

- SC = smart contract

---

## Context

- Available for all "transaction functions"
- Provides transaction context
- Provides API for the world state using "getStub()"

---

- a transaction context (TC) is created when a smart contract is instantiated
- and this TC is used for further transactions of this SC
	- the TC allows to administer user variables within a SC
	- the TC provides an API (within the SC) for:
		- querying or updating ledger (for immutable blockchain and modifiable world state)
		- retrieving digital identity of transaction-submitting application

---

own observations:

- commercial-paper-example


---
## Stub

- a stub contains:
    - arguments
    - TransactionID
    - ChannelID
    - invocating User/Creator
