# Commercial Paper Tutorial

## MagnetoCorp
* Smart Contract in
    * Javascript: papercontract.js
    * Java: CommercialPaperContract.java

- Pfad nach Installation des SC im Docker Image
    * /opt/gopath/src/github.com/contract

* Smart Contract Initialisierung:
    * In diesem Fall auf dem 'orderer' initialisiert
    * Wird verteilt an alle Teilnehmer des aktuellen Channels
    * Argument -P besonders wichtig -> legt endorsement policy für papercontract fest.
    * Bestimmt also, wer einen Block als valid bestimmen darf.

- Alle Transaktionen, ob valid oder invalid werden in der Ledger Blockchain festgehalten, aber:
    * Nur valide Transaktionen verändern den world state

* Beispielhafte Transaktion 'issue':
    * X.509 Zertifikat aus dem Wallet holen
    * Transaktion (issue) wird über gateway verteilt
    * peer1 kann Transaktion endorsen/genehmigen

- addToWallet.js lädt X.509 Zertifikat des Nutzers in Wallet
    * Nutzer können mehrere Identitäten im Wallet haben

* issue.js startet Issue-Transaktion
    * Im Context des papercontract.js Smart Contracts
    * Generiert einen neuen Block mit einer Transaktion (issue)
    * Block wird von peer0.org1 validiert
        * Ledger Blockchain & World State werden geupdated
