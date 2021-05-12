# Proiect-Blockchain
Usage: 1. Install metamask extension in chrome and log in your wallet with Ropsten Test Network. We added ethereum in the wallets using Faucet.

2. Paste the contents of smart_contract.txt in the Remix IDE.

3. Select Injected Web3 as environment and then Compile and Deploy the contract.

4. After the contract deployed, copy its address and go to the config.js file
and replace the address contents with the contract address. 

5. Since you are the owner of the contract, only you can add new colleges manually via the remix ide interface. There insert the wallet address of the college (or any user that you want to enable certificate issuing for) and the college name. Now this address can issue certificates (to test this out you can add your own wallet address as a college). 

6.  Now, for the front end, run `npm install` which will install all the required dependencies and then run `npm start` (you will need node for this step since our app uses ReactJS).

7. If your wallet in added to the college database you can issue certificates, the click on "View certificate" where your new certificate will appear. After like 20 seconds, in validate Certificate you can enter the certificate id (which can be seen at View Certificate) and if the id is correct you will see the certificate there!
