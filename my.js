
//   Создайте объект кассира, который получает список продуктов и деньги, 
//   подсчитывает общую стоимость продуктов, и в зависимости от того
//   хватает денег или нет, уведомляет покупателя о результате.
// */

// /*
//   Есть заранее известная база данных товаров, 
//   в формате "имя-товара":"цена за одну единицу"
// */ 


// const changeAmount = function(){
//   const x = totalPrice();
//   const y = customerMoney;
//   console.log(x , y);
//   // if {customerMoney - TotalPrice}
// };
// changeAmount();

/* 
  Необходимо создать функцию-конструктор Cashier для объектов кассира,
  чтобы можно было создать сколько угодно кассиров.
  
  Поля объекта кассира: 
    // - name - строка, имя, передается при вызове конструктораef
    
    - products - объект база данных продуктов, передается при вызове конструктора
    
    - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
    
    - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
    
    - changeAmount - число, сдача, всегда начинается с 0
    
    - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products
      
    - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
        Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
        пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
        введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
        то функция возвращает null.
        
    - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
    
    - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
    
    - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
        вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
        countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
        строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
        Вызывает метод reset при любом исходе обслуживания.
        */


// console.log('countTotalPrice', countTotalPrice(order));

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 20,
  milk: 2,
  apples: 1,
  cheese: 1
};


function Cashier(name, products=[]){
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
    
    this.countTotalPrice = function ()   {
      const productsList = Object.keys(this.products);
      const ordersList = Object.keys(order);
      for (const product of ordersList) {
        if (!productsList.includes(product)) {
          alert(`Товара с именем ${product} нет`);
          return null;
        } else {
          this.totalPrice += order[product] * products[product];
        }
      } console.log('Sum customer order',this.totalPrice);
    };

    
    this.customerMoney = function(){
      let customerMoney  =0;
      let customerInput= parseInt(prompt("Enter a Number", "1"), 10);
      if(customerMoney>=0){
        this.customerMoney = customerInput;
      };
    };
    
    this.countChange = function(){
      let countChange = 0;
      const x = this.totalPrice;
      const y = this.customerMoney;
      console.log('Покупатель ввел суму ', y);
      if (y>=x){
        countChange = y - x;
        return console.log(`ваша сдача : ${countChange} грн`);
      }
      console.log('Очень жаль, что-то пошло не так, приходите еще');
    };

    this.reset = function(){
      const totalPrice = 0;
      const customerMoney = 0;
      const changeAmount = 0
    };

    this.serve = function(order){
      this.countTotalPrice();
      this.customerMoney();
      this.countChange();
      this.reset();
    };

    
  };

  
  //  console.log(vasya);

  // код
  // не забывайте о this при обращении к свойствам и методам будущего объекта

/*
  В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
  */

/*
  Ниже приведен пример использования.
  */

  const cashier = new Cashier('Mango', products);
  const vasya = new Cashier('Vasya', products);
// vasya.serve(order);

vasya.serve(order);


  // При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
  // Далее выполнение идет по вышеописанному алгоритму.
