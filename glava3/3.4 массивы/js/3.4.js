let kol = 0;
for (let i=0; i<mas.length; i++) {
  if (mas[i]<0 && mas[i]%2==0) kol += mas[i];
}
console.log(kol);