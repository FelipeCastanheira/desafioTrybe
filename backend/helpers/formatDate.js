// Estas funções foram criadas por Borislav Hadzhiev
// Fonte: https://bobbyhadz.com/blog/javascript-format-date-yyyy-mm-dd-hh-mm-ss
// Para data atual, chamar formatDate com o parâmetro new Date();

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    `${[
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') 
    } ${ 
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')}`
  );
}

module.exports = formatDate;
