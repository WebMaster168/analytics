// Бургер меню

const burgerBtn = document.querySelector('.hero__burger')
const popup = document.querySelector('.hero__navigation')

burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('cross')
    popup.classList.toggle('visible')
    
})


// Построение граффика

const ctx = document.getElementById('myChart').getContext('2d')

const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets:[{
            label:'Промо-давление',
            data:[38,44,49,52,54,56],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor:'rgba(255,0,0,1)',
            borderWidth: 2,
            
            tension:0.6
        }]
    },
    options: {
        scales: {
            x: {
                display: true, // Скрываем метки меток оси
                grid: {
                    display: false // Скрываем линии сетки
                },
                ticks: {
                    display: true // Отображаем сами года
                }
            },
            y: {
                min:30,
                max:60, 
                grid: { display: true },
                ticks: {
                    // Функция форматирования меток оси Y
                    callback: function(value, index, values) {
                        // Проверяем, находится ли значение в диапазоне от 30 до 60
                        if (value >= 30 && value <= 60) {
                            // Добавляем значок % к значению
                            return value + '%';
                        } else {
                            // Возвращаем значение без изменений
                            return value;
                        }
                    }
                } 
            }
        }
    }
})

// Слайдер

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:2,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
})
  

