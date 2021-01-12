# Contect
Contect is een applicatie die ouderen en kinderen verbind op een leuke interactieve manier.

## Hoe werkt het?
Er wordt gebruik gemaakt van ML5.js en Posenet om verschillende punten (17) op het lichaam te herkennen. Om daarna posities te herkennen wordt er eerst een model getraind.

*Datacollection.js:*
Eerst moeten de verschillende posities worden verzameld. Bij het drukken op een willekeurige toets gaat datacollection een json bestand aanmaken waarin 30 seconden lang al jouw posities worden ingestoken samen met de bijbehorende toets die je aan deze positie meegeeft. Bij het drukken op "S" zal de json gesaved worden. De code staat geprogrammeerd om 4 posities mee te nemen.

*ModelTraining.js:*
Train het Neural Network met de classification methode. Maakt de 3 model-files aan.

*Deploy.js:*
Dit is de eerste spelvorm. Er zal worden gevraagd om een positie na te doen. Het getrainde model gaat kijken met welke positie dit het beste overeenkomt.

