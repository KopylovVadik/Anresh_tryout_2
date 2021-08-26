
// Получение данных из файла
async function GetData() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/api/values", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });

    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const data = await response.json();
        //console.log(data)
        const filtered_data = data.filter((item) => {
            return item !== '';
        });
        //console.log(filtered_data);
        document.querySelector('#w3review').value = filtered_data;
    }

}


// Редактирование данных из файла
async function EditData(value) {
    const response = await fetch("api/values", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            value
        })
    });
    if (response.ok === true) {
        const result = await response.json();
        //console.log(result);
       
        //reset();
    }
}


// Обновление данных из файла
async function UpdateData() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/api/values", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });

    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const data = await response.json();
        
        document.querySelector('#w3review').value = data;

    }

}


let save_button = document.querySelector('#submit')
save_button.addEventListener('click', (e) => {
    e.preventDefault()
    const value = document.querySelector('#w3review').value
    // логика обработки отправки
    //console.log(value.split(","))
    EditData(value);
})




let update_button = document.querySelector('#reset')
update_button.addEventListener('click', (e) => {
    e.preventDefault()
   
    UpdateData();
})


// вызов функции
GetData();