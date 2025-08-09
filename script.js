function recordIncome(amount) {
  let incomeHistory = JSON.parse(localStorage.getItem("incomeHistory")) || [];
  incomeHistory.push({ date: new Date().toLocaleDateString(), amount: amount });
  localStorage.setItem("incomeHistory", JSON.stringify(incomeHistory));
}
