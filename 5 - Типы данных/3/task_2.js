function checkSpam(text) {
  return (
    text.toLowerCase().includes('viagra') ||
    text.toLowerCase().includes('xxx')
  )
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
