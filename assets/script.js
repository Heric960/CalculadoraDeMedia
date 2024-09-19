function sendData(n1, n2, n3, n4) {
     return fetch('processar.php', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ n1, n2, n3, n4 })
     })
     .then(response => response.json());
 }

 function calc() {
     let n1 = parseFloat(document.getElementById('N1').value);
     let n2 = parseFloat(document.getElementById('N2').value);
     let n3 = parseFloat(document.getElementById('N3').value);
     let n4 = parseFloat(document.getElementById('N4').value);
 
     sendData(n1, n2, n3, n4).then(data => {
         let letra = data.letra;
 
         let resultadoEl = document.getElementById('resultado');
         resultadoEl.style.display = 'block';
 
         if (letra === 'A') {
             resultadoEl.textContent = `${letra}: Aprovado com Louvor`;
         } else if (letra === 'B') {
             resultadoEl.textContent = `${letra}: Aluno Aprovado`;
         } else if (letra === 'C') {
             resultadoEl.textContent = `${letra}: Recuperação, sua chance de passar`;
         } else {
             resultadoEl.textContent = `${letra}: Poxa vida, vamos tentar novamente ano que vem`;
         }
     }).catch(error => {
         console.error('Erro:', error);
     });
 }

