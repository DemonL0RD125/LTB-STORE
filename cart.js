function saveIncomeToChart(totalAmount) {
  const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
  let history = JSON.parse(localStorage.getItem('incomeHistory')) || [];

  const existing = history.find(entry => entry.date === today);
  if (existing) {
    existing.total += totalAmount;
  } else {
    history.push({ date: today, total: totalAmount });
  }

  localStorage.setItem('incomeHistory', JSON.stringify(history));
}

saveIncomeToChart(totalAmount);
