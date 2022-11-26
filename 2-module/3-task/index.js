let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
<<<<<<< HEAD
    return this.a + this.b;
  },

=======
    return this.a + this.b; 
  },
>>>>>>> 5ab7bbf4a077bcfdc3ca0f16b9f5f6dada01940b
  mul() {
    return this.a * this.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
