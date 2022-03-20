let n = 7;
print(n)
function print(n){
  if(n==1) {
    console.log(1)
    return
  }

  print(n-1)
  console.log(n)
}