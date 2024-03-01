console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  // Створюємо змінну counter яка буде лічильником та присвоюємо значення 0
  // Створюємо проміс з іменем intervalPromise.
  // Використовуємо функцію setInterval, щоб імітувати асинхронну операцію яка повторюється кожну секунду
  // збільшуючи лічильник на 1
  // Виводимо в консоль `Значення лічильника: ${counter}`
  // Коли лічильник досягає 5, використовуємо clearInterval та викликаємо resolve, який повертає значення лічильника.
  // Використовуємо .then метод для отримання значення, яке було передане у функцію resolve() в нашому промісі, та виводимо його в консоль.
  // Використовуємо .catch метод для обробки випадків, коли проміс переходить в стан "rejected". Та виводимо в консоль помилку.
  // Обробляємо помилку, якщо вона виникне
  // Ми використовуємо .finally метод для виконання дій незалежно від того, в якому стані завершився наш проміс, та виводимо повідомлення "Завершення лічильника"
  // Виконуємо код після завершення проміса
  let counter = 0;
  const intervalPromise = new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);
      if (counter === 5) {
        clearInterval(timer);
        resolve(counter);
      }
    }, 1000);
  });
  intervalPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Завершення лічильника");
  })
}
// Викликаємо функцію task5
task5();
