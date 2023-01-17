function loadSelectOption(id, inputId, itemsId, selectId, items) {
    const listItemsOption = items.map(element => {
        let result = '';
        result += `<div class="items-option ${selectId}">${element}</div>`
        return result;
    }).join('');
    document.getElementById(id).innerHTML = `<div class="wrapper-select-option">
        <div class="form-input-option">
            <input id="${inputId}" class="input-option" type="text" placeholder="Please choose value!" readonly />
            <img class="ic-down-select" src="../../images/public/ic-down-select.svg" />
        </div>
        <div id="${itemsId}" class="list-items-option">
            ${listItemsOption}
        </div>
    </div>`

    document.getElementById(inputId).addEventListener('mouseup', () => {
        const itemsOption = document.getElementById(itemsId);
        if (itemsOption.classList.contains('active')) {
            document.getElementById(itemsId).classList.remove('active');
        } else {
            document.getElementById(itemsId).classList.add('active');
        }
    });

    const itemsSelect = document.getElementsByClassName(selectId);
    for (let i = 0; i < itemsSelect.length; i++) {
        itemsSelect[i].addEventListener('click', () => {
            for (let j = 0; j < itemsSelect.length; j++) {
                itemsSelect[j].classList.remove('active');
            }
            itemsSelect[i].classList.add('active');
            document.getElementById(inputId).value = itemsSelect[i].innerHTML;
            document.getElementById(itemsId).classList.remove('active');
        })
    }
}