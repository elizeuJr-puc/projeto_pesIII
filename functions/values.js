export function getTypeImovel(selectElement){
    var selectValue = selectElement.value;
    return selectValue
}

export function getTypeTax(selectElement){
    var selectValue = selectElement.value
    return selectValue
}

export function getValueImovel(valueImovel){
    var value = valueImovel.value
    return value
}

export function getMonthlyIncome(monthlyIncome){
    var value = monthlyIncome.value
    return value
}

export function getTerm(valueTerm){
    var value = valueTerm.value
    return value
}

export function getPropertyValue(valueProperty){
    var value = valueProperty.value
    return value
}

export function getFGTS(valueFGTS){
    var value = valueFGTS.value
    return value
}

export function getValueCheckbox(checkbox){
    var isChecked = checkbox.checked;
    var value = isChecked ? 'Marcada' : 'Não marcada';
    return value
}
