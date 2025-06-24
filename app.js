import { Chart } from "@/components/ui/chart"
class BudgetManager {
  constructor() {
    this.currentView = "monthly"
    this.monthlyChart = null
    this.yearlyChart = null
    this.currentLanguage = localStorage.getItem("selectedLanguage") || "fr"
    this.translations = {
      fr: {
        title: "💰 Budget Personnel",
        revenue: "Revenus",
        expenses: "Dépenses",
        balance: "Solde",
        newTransaction: "Nouvelle Transaction",
        date: "Date",
        description: "Description",
        amount: "Montant (€)",
        type: "Type",
        revenueOption: "Revenu",
        expenseOption: "Dépense",
        add: "Ajouter",
        monthTransactions: "Transactions du Mois",
        monthlyChart: "Graphique Mensuel",
        totalYearlyRevenue: "Total Revenus Annuels",
        totalYearlyExpenses: "Total Dépenses Annuelles",
        yearlyBalance: "Solde Annuel",
        yearlyEvolution: "Évolution Annuelle",
        monthlyBreakdown: "Détail par Mois",
        toggleYearly: "Vue Annuelle",
        toggleMonthly: "Vue Mensuelle",
        delete: "Supprimer",
        noTransactions: "Aucune transaction ce mois-ci",
        noData: "Aucune donnée disponible",
        current: "(Actuel)",
        dailyExpenses: "Dépenses quotidiennes",
        dailyRevenues: "Revenus quotidiens",
        dailyEvolution: "Évolution quotidienne du mois",
        monthlyEvolution: "Évolution mensuelle annuelle",
        months: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
      },
      en: {
        title: "💰 Personal Budget",
        revenue: "Income",
        expenses: "Expenses",
        balance: "Balance",
        newTransaction: "New Transaction",
        date: "Date",
        description: "Description",
        amount: "Amount (€)",
        type: "Type",
        revenueOption: "Income",
        expenseOption: "Expense",
        add: "Add",
        monthTransactions: "Monthly Transactions",
        monthlyChart: "Monthly Chart",
        totalYearlyRevenue: "Total Yearly Income",
        totalYearlyExpenses: "Total Yearly Expenses",
        yearlyBalance: "Yearly Balance",
        yearlyEvolution: "Yearly Evolution",
        monthlyBreakdown: "Monthly Breakdown",
        toggleYearly: "Yearly View",
        toggleMonthly: "Monthly View",
        delete: "Delete",
        noTransactions: "No transactions this month",
        noData: "No data available",
        current: "(Current)",
        dailyExpenses: "Daily expenses",
        dailyRevenues: "Daily income",
        dailyEvolution: "Daily evolution of the month",
        monthlyEvolution: "Monthly yearly evolution",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      es: {
        title: "💰 Presupuesto Personal",
        revenue: "Ingresos",
        expenses: "Gastos",
        balance: "Saldo",
        newTransaction: "Nueva Transacción",
        date: "Fecha",
        description: "Descripción",
        amount: "Cantidad (€)",
        type: "Tipo",
        revenueOption: "Ingreso",
        expenseOption: "Gasto",
        add: "Agregar",
        monthTransactions: "Transacciones del Mes",
        monthlyChart: "Gráfico Mensual",
        totalYearlyRevenue: "Total Ingresos Anuales",
        totalYearlyExpenses: "Total Gastos Anuales",
        yearlyBalance: "Saldo Anual",
        yearlyEvolution: "Evolución Anual",
        monthlyBreakdown: "Desglose Mensual",
        toggleYearly: "Vista Anual",
        toggleMonthly: "Vista Mensual",
        delete: "Eliminar",
        noTransactions: "No hay transacciones este mes",
        noData: "No hay datos disponibles",
        current: "(Actual)",
        dailyExpenses: "Gastos diarios",
        dailyRevenues: "Ingresos diarios",
        dailyEvolution: "Evolución diaria del mes",
        monthlyEvolution: "Evolución mensual anual",
        months: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      },
      ar: {
        title: "💰 الميزانية الشخصية",
        revenue: "الإيرادات",
        expenses: "المصروفات",
        balance: "الرصيد",
        newTransaction: "معاملة جديدة",
        date: "التاريخ",
        description: "الوصف",
        amount: "المبلغ (€)",
        type: "النوع",
        revenueOption: "إيراد",
        expenseOption: "مصروف",
        add: "إضافة",
        monthTransactions: "معاملات الشهر",
        monthlyChart: "الرسم البياني الشهري",
        totalYearlyRevenue: "إجمالي الإيرادات السنوية",
        totalYearlyExpenses: "إجمالي المصروفات السنوية",
        yearlyBalance: "الرصيد السنوي",
        yearlyEvolution: "التطور السنوي",
        monthlyBreakdown: "التفصيل الشهري",
        toggleYearly: "العرض السنوي",
        toggleMonthly: "العرض الشهري",
        delete: "حذف",
        noTransactions: "لا توجد معاملات هذا الشهر",
        noData: "لا توجد بيانات متاحة",
        current: "(الحالي)",
        dailyExpenses: "المصروفات اليومية",
        dailyRevenues: "الإيرادات اليومية",
        dailyEvolution: "التطور اليومي للشهر",
        monthlyEvolution: "التطور الشهري السنوي",
        months: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ],
        monthsShort: ["ين", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
      },
      it: {
        title: "💰 Budget Personale",
        revenue: "Entrate",
        expenses: "Spese",
        balance: "Saldo",
        newTransaction: "Nuova Transazione",
        date: "Data",
        description: "Descrizione",
        amount: "Importo (€)",
        type: "Tipo",
        revenueOption: "Entrata",
        expenseOption: "Spesa",
        add: "Aggiungi",
        monthTransactions: "Transazioni del Mese",
        monthlyChart: "Grafico Mensile",
        totalYearlyRevenue: "Totale Entrate Annuali",
        totalYearlyExpenses: "Totale Spese Annuali",
        yearlyBalance: "Saldo Annuale",
        yearlyEvolution: "Evoluzione Annuale",
        monthlyBreakdown: "Dettaglio Mensile",
        toggleYearly: "Vista Annuale",
        toggleMonthly: "Vista Mensile",
        delete: "Elimina",
        noTransactions: "Nessuna transazione questo mese",
        noData: "Nessun dato disponibile",
        current: "(Corrente)",
        dailyExpenses: "Spese giornaliere",
        dailyRevenues: "Entrate giornaliere",
        dailyEvolution: "Evoluzione giornaliera del mese",
        monthlyEvolution: "Evoluzione mensile annuale",
        months: [
          "Gennaio",
          "Febbraio",
          "Marzo",
          "Aprile",
          "Maggio",
          "Giugno",
          "Luglio",
          "Agosto",
          "Settembre",
          "Ottobre",
          "Novembre",
          "Dicembre",
        ],
        monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
      },
      de: {
        title: "💰 Persönliches Budget",
        revenue: "Einnahmen",
        expenses: "Ausgaben",
        balance: "Saldo",
        newTransaction: "Neue Transaktion",
        date: "Datum",
        description: "Beschreibung",
        amount: "Betrag (€)",
        type: "Typ",
        revenueOption: "Einnahme",
        expenseOption: "Ausgabe",
        add: "Hinzufügen",
        monthTransactions: "Monatliche Transaktionen",
        monthlyChart: "Monatliches Diagramm",
        totalYearlyRevenue: "Gesamte Jahreseinnahmen",
        totalYearlyExpenses: "Gesamte Jahresausgaben",
        yearlyBalance: "Jahressaldo",
        yearlyEvolution: "Jährliche Entwicklung",
        monthlyBreakdown: "Monatliche Aufschlüsselung",
        toggleYearly: "Jahresansicht",
        toggleMonthly: "Monatsansicht",
        delete: "Löschen",
        noTransactions: "Keine Transaktionen in diesem Monat",
        noData: "Keine Daten verfügbar",
        current: "(Aktuell)",
        dailyExpenses: "Tägliche Ausgaben",
        dailyRevenues: "Tägliche Einnahmen",
        dailyEvolution: "Tägliche Entwicklung des Monats",
        monthlyEvolution: "Monatliche jährliche Entwicklung",
        months: [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember",
        ],
        monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      },
      zh: {
        title: "💰 个人预算",
        revenue: "收入",
        expenses: "支出",
        balance: "余额",
        newTransaction: "新交易",
        date: "日期",
        description: "描述",
        amount: "金额 (€)",
        type: "类型",
        revenueOption: "收入",
        expenseOption: "支出",
        add: "添加",
        monthTransactions: "本月交易",
        monthlyChart: "月度图表",
        totalYearlyRevenue: "年度总收入",
        totalYearlyExpenses: "年度总支出",
        yearlyBalance: "年度余额",
        yearlyEvolution: "年度演变",
        monthlyBreakdown: "月度明细",
        toggleYearly: "年度视图",
        toggleMonthly: "月度视图",
        delete: "删除",
        noTransactions: "本月无交易",
        noData: "无可用数据",
        current: "（当前）",
        dailyExpenses: "每日支出",
        dailyRevenues: "每日收入",
        dailyEvolution: "本月每日演变",
        monthlyEvolution: "年度月度演变",
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      },
    }
    this.init()
  }

  init() {
    this.checkMonthlyReset()
    this.setupEventListeners()
    this.setLanguage(this.currentLanguage)
    this.updateCurrentMonth()
    this.loadData()
    this.updateDisplay()
    this.createCharts()
  }

  setupEventListeners() {
    document.getElementById("transactionForm").addEventListener("submit", (e) => {
      e.preventDefault()
      this.addTransaction()
    })

    document.getElementById("toggleView").addEventListener("click", () => {
      this.toggleView()
    })

    document.getElementById("languageSelect").addEventListener("change", (e) => {
      this.setLanguage(e.target.value)
    })

    // Set today's date as default
    document.getElementById("transactionDate").valueAsDate = new Date()
  }

  setLanguage(lang) {
    this.currentLanguage = lang
    localStorage.setItem("selectedLanguage", lang)

    // Set document direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"

    // Update language selector
    document.getElementById("languageSelect").value = lang

    // Update all translatable elements
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (this.translations[lang] && this.translations[lang][key]) {
        element.textContent = this.translations[lang][key]
      }
    })

    // Update placeholder
    const nameInput = document.getElementById("transactionName")
    const placeholders = {
      fr: "Ex: Salaire, Courses...",
      en: "Ex: Salary, Groceries...",
      es: "Ej: Salario, Compras...",
      ar: "مثال: راتب، تسوق...",
      it: "Es: Stipendio, Spesa...",
      de: "Z.B: Gehalt, Einkäufe...",
      zh: "例如：工资，购物...",
    }
    nameInput.placeholder = placeholders[lang]

    // Update amount placeholder
    const amountInput = document.getElementById("transactionAmount")
    amountInput.placeholder = "0.00"

    // Update toggle button text
    const toggleButton = document.getElementById("toggleView")
    if (this.currentView === "monthly") {
      toggleButton.textContent = this.translations[lang].toggleYearly
    } else {
      toggleButton.textContent = this.translations[lang].toggleMonthly
    }

    // Refresh displays and charts
    this.updateCurrentMonth()
    this.updateDisplay()
    this.updateCharts()
  }

  checkMonthlyReset() {
    const now = new Date()
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const lastResetMonth = localStorage.getItem("lastResetMonth")

    if (lastResetMonth !== currentMonth) {
      // Archive current month data before reset
      this.archiveCurrentMonth()
      // Reset monthly data
      localStorage.removeItem("monthlyTransactions")
      localStorage.setItem("lastResetMonth", currentMonth)
    }
  }

  archiveCurrentMonth() {
    const monthlyTransactions = this.getMonthlyTransactions()
    if (monthlyTransactions.length > 0) {
      const now = new Date()
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      const monthKey = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, "0")}`

      const yearlyData = JSON.parse(localStorage.getItem("yearlyData") || "{}")
      yearlyData[monthKey] = monthlyTransactions
      localStorage.setItem("yearlyData", JSON.stringify(yearlyData))
    }
  }

  updateCurrentMonth() {
    const now = new Date()
    const monthNames = this.translations[this.currentLanguage].months
    document.getElementById("currentMonth").textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`
  }

  addTransaction() {
    const form = document.getElementById("transactionForm")
    const formData = new FormData(form)

    const transaction = {
      id: Date.now(),
      date: formData.get("transactionDate"),
      name: formData.get("transactionName"),
      amount: Number.parseFloat(formData.get("transactionAmount")),
      type: formData.get("transactionType"),
    }

    const transactions = this.getMonthlyTransactions()
    transactions.push(transaction)
    localStorage.setItem("monthlyTransactions", JSON.stringify(transactions))

    form.reset()
    document.getElementById("transactionDate").valueAsDate = new Date()

    this.updateDisplay()
    this.updateCharts()
  }

  deleteTransaction(id) {
    const transactions = this.getMonthlyTransactions()
    const filteredTransactions = transactions.filter((t) => t.id !== id)
    localStorage.setItem("monthlyTransactions", JSON.stringify(filteredTransactions))

    this.updateDisplay()
    this.updateCharts()
  }

  getMonthlyTransactions() {
    return JSON.parse(localStorage.getItem("monthlyTransactions") || "[]")
  }

  getYearlyData() {
    return JSON.parse(localStorage.getItem("yearlyData") || "{}")
  }

  calculateMonthlyTotals(transactions) {
    return transactions.reduce(
      (totals, transaction) => {
        if (transaction.type === "revenue") {
          totals.revenue += transaction.amount
        } else {
          totals.expenses += transaction.amount
        }
        return totals
      },
      { revenue: 0, expenses: 0 },
    )
  }

  updateDisplay() {
    if (this.currentView === "monthly") {
      this.updateMonthlyDisplay()
    } else {
      this.updateYearlyDisplay()
    }
  }

  updateMonthlyDisplay() {
    const transactions = this.getMonthlyTransactions()
    const totals = this.calculateMonthlyTotals(transactions)
    const balance = totals.revenue - totals.expenses

    document.getElementById("totalRevenue").textContent = `${totals.revenue.toFixed(2)} €`
    document.getElementById("totalExpenses").textContent = `${totals.expenses.toFixed(2)} €`
    document.getElementById("balance").textContent = `${balance.toFixed(2)} €`
    document.getElementById("balance").style.color = balance >= 0 ? "#28a745" : "#dc3545"

    this.displayTransactions(transactions)
  }

  updateYearlyDisplay() {
    const yearlyData = this.getYearlyData()
    const currentMonthTransactions = this.getMonthlyTransactions()

    const yearlyTotals = { revenue: 0, expenses: 0 }

    // Add archived months
    Object.values(yearlyData).forEach((monthTransactions) => {
      const monthTotals = this.calculateMonthlyTotals(monthTransactions)
      yearlyTotals.revenue += monthTotals.revenue
      yearlyTotals.expenses += monthTotals.expenses
    })

    // Add current month
    const currentTotals = this.calculateMonthlyTotals(currentMonthTransactions)
    yearlyTotals.revenue += currentTotals.revenue
    yearlyTotals.expenses += currentTotals.expenses

    const yearlyBalance = yearlyTotals.revenue - yearlyTotals.expenses

    document.getElementById("yearlyRevenue").textContent = `${yearlyTotals.revenue.toFixed(2)} €`
    document.getElementById("yearlyExpenses").textContent = `${yearlyTotals.expenses.toFixed(2)} €`
    document.getElementById("yearlyBalance").textContent = `${yearlyBalance.toFixed(2)} €`
    document.getElementById("yearlyBalance").style.color = yearlyBalance >= 0 ? "#28a745" : "#dc3545"

    this.displayMonthlyBreakdown()
  }

  displayTransactions(transactions) {
    const container = document.getElementById("transactionsList")

    if (transactions.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: #6c757d; padding: 20px;">${this.translations[this.currentLanguage].noTransactions}</p>`
      return
    }

    const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date))

    container.innerHTML = sortedTransactions
      .map(
        (transaction) => `
            <div class="transaction-item ${transaction.type}">
                <div class="transaction-info">
                    <div class="transaction-name">${transaction.name}</div>
                    <div class="transaction-date">${new Date(transaction.date).toLocaleDateString(this.getLocaleCode())}</div>
                </div>
                <div class="transaction-amount ${transaction.type}">
                    ${transaction.type === "revenue" ? "+" : "-"}${transaction.amount.toFixed(2)} €
                </div>
                <button class="btn btn-danger" onclick="budgetManager.deleteTransaction(${transaction.id})">
                    ${this.translations[this.currentLanguage].delete}
                </button>
            </div>
        `,
      )
      .join("")
  }

  displayMonthlyBreakdown() {
    const yearlyData = this.getYearlyData()
    const currentMonthTransactions = this.getMonthlyTransactions()
    const container = document.getElementById("monthlyBreakdown")

    const monthNames = this.translations[this.currentLanguage].months

    const monthsData = []

    // Add archived months
    Object.entries(yearlyData).forEach(([monthKey, transactions]) => {
      const [year, month] = monthKey.split("-")
      const totals = this.calculateMonthlyTotals(transactions)
      monthsData.push({
        key: monthKey,
        name: `${monthNames[Number.parseInt(month) - 1]} ${year}`,
        ...totals,
        balance: totals.revenue - totals.expenses,
      })
    })

    // Add current month
    const now = new Date()
    const currentTotals = this.calculateMonthlyTotals(currentMonthTransactions)
    monthsData.push({
      key: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`,
      name: `${monthNames[now.getMonth()]} ${now.getFullYear()} ${this.translations[this.currentLanguage].current}`,
      ...currentTotals,
      balance: currentTotals.revenue - currentTotals.expenses,
    })

    // Sort by date (most recent first)
    monthsData.sort((a, b) => b.key.localeCompare(a.key))

    if (monthsData.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: #6c757d; padding: 20px;">${this.translations[this.currentLanguage].noData}</p>`
      return
    }

    container.innerHTML = monthsData
      .map(
        (month) => `
            <div class="month-item">
                <div class="month-name">${month.name}</div>
                <div class="month-amounts">
                    <span class="month-revenue">+${month.revenue.toFixed(2)} €</span>
                    <span class="month-expense">-${month.expenses.toFixed(2)} €</span>
                    <span class="month-balance" style="color: ${month.balance >= 0 ? "#28a745" : "#dc3545"}">
                        ${month.balance.toFixed(2)} €
                    </span>
                </div>
            </div>
        `,
      )
      .join("")
  }

  toggleView() {
    const monthlyView = document.getElementById("monthlyView")
    const yearlyView = document.getElementById("yearlyView")
    const toggleButton = document.getElementById("toggleView")

    if (this.currentView === "monthly") {
      monthlyView.classList.remove("active")
      yearlyView.classList.add("active")
      toggleButton.textContent = this.translations[this.currentLanguage].toggleYearly
      this.currentView = "yearly"
      this.updateYearlyDisplay()
      this.updateCharts()
    } else {
      yearlyView.classList.remove("active")
      monthlyView.classList.add("active")
      toggleButton.textContent = this.translations[this.currentLanguage].toggleMonthly
      this.currentView = "monthly"
      this.updateMonthlyDisplay()
      this.updateCharts()
    }
  }

  createCharts() {
    this.createMonthlyChart()
    this.createYearlyChart()
  }

  createMonthlyChart() {
    const ctx = document.getElementById("monthlyChart").getContext("2d")

    if (this.monthlyChart) {
      this.monthlyChart.destroy()
    }

    const transactions = this.getMonthlyTransactions()
    const dailyData = this.getDailyExpenses(transactions)

    this.monthlyChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dailyData.labels,
        datasets: [
          {
            label: this.translations[this.currentLanguage].dailyExpenses,
            data: dailyData.expenses,
            borderColor: "#dc3545",
            backgroundColor: "rgba(220, 53, 69, 0.1)",
            tension: 0.4,
            fill: true,
          },
          {
            label: this.translations[this.currentLanguage].dailyRevenues,
            data: dailyData.revenues,
            borderColor: "#28a745",
            backgroundColor: "rgba(40, 167, 69, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: this.translations[this.currentLanguage].dailyEvolution,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value + " €",
            },
          },
        },
      },
    })
  }

  createYearlyChart() {
    const ctx = document.getElementById("yearlyChart").getContext("2d")

    if (this.yearlyChart) {
      this.yearlyChart.destroy()
    }

    const yearlyData = this.getYearlyData()
    const currentMonthTransactions = this.getMonthlyTransactions()
    const monthlyData = this.getMonthlyChartData(yearlyData, currentMonthTransactions)

    this.yearlyChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: monthlyData.labels,
        datasets: [
          {
            label: this.translations[this.currentLanguage].revenue,
            data: monthlyData.revenues,
            backgroundColor: "rgba(40, 167, 69, 0.8)",
            borderColor: "#28a745",
            borderWidth: 1,
          },
          {
            label: this.translations[this.currentLanguage].expenses,
            data: monthlyData.expenses,
            backgroundColor: "rgba(220, 53, 69, 0.8)",
            borderColor: "#dc3545",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: this.translations[this.currentLanguage].monthlyEvolution,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value + " €",
            },
          },
        },
      },
    })
  }

  getDailyExpenses(transactions) {
    const now = new Date()
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()

    const dailyExpenses = new Array(daysInMonth).fill(0)
    const dailyRevenues = new Array(daysInMonth).fill(0)
    const labels = []

    for (let i = 1; i <= daysInMonth; i++) {
      labels.push(i.toString())
    }

    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date)
      const day = transactionDate.getDate() - 1 // Array is 0-indexed

      if (transaction.type === "expense") {
        dailyExpenses[day] += transaction.amount
      } else {
        dailyRevenues[day] += transaction.amount
      }
    })

    return {
      labels,
      expenses: dailyExpenses,
      revenues: dailyRevenues,
    }
  }

  getMonthlyChartData(yearlyData, currentMonthTransactions) {
    const monthNames = this.translations[this.currentLanguage].monthsShort

    const now = new Date()
    const currentYear = now.getFullYear()

    const labels = []
    const revenues = []
    const expenses = []

    // Generate data for all months of current year
    for (let month = 0; month < 12; month++) {
      const monthKey = `${currentYear}-${String(month + 1).padStart(2, "0")}`
      labels.push(monthNames[month])

      let monthRevenue = 0
      let monthExpense = 0

      if (yearlyData[monthKey]) {
        const totals = this.calculateMonthlyTotals(yearlyData[monthKey])
        monthRevenue = totals.revenue
        monthExpense = totals.expenses
      }

      // Add current month data
      if (month === now.getMonth()) {
        const currentTotals = this.calculateMonthlyTotals(currentMonthTransactions)
        monthRevenue += currentTotals.revenue
        monthExpense += currentTotals.expenses
      }

      revenues.push(monthRevenue)
      expenses.push(monthExpense)
    }

    return { labels, revenues, expenses }
  }

  updateCharts() {
    if (this.currentView === "monthly") {
      this.createMonthlyChart()
    } else {
      this.createYearlyChart()
    }
  }

  loadData() {
    // Data is loaded automatically from localStorage in other methods
    console.log("Données chargées depuis localStorage")
  }

  getLocaleCode() {
    const locales = {
      fr: "fr-FR",
      en: "en-US",
      es: "es-ES",
      ar: "ar-SA",
      it: "it-IT",
      de: "de-DE",
      zh: "zh-CN",
    }
    return locales[this.currentLanguage] || "fr-FR"
  }
}

// Initialize the budget manager
const budgetManager = new BudgetManager()
