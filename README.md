# Contect
Contect is een applicatie die ouderen en kinderen verbind op een leuke interactieve manier.

## Hoe werkt het?
Er wordt gebruik gemaakt van ML5.js en Posenet om verschillende punten op het lichaam te herkennen. Om daarna posities te herkennen wordt er eerst een model getraind. 
*Datacollection.js:*
Eerst moeten de verschillende posities worden verzameld. Bij het drukken op een willekeurige toets gaat datacollection een json bestand aanmaken waarin 30 seconden lang al jouw posities worden ingestoken samen met de bijbehorende toets die je aan deze positie meegeeft.
