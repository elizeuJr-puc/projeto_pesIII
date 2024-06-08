import * as validation from './validation.js';

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    var valueProperty = document.getElementById('propertyValue').value
    var selectElement = document.getElementById('typeImovel')
    var valueImovel = parseInt(document.getElementById('valueImovel').value)
    var monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value)
    var valueTerm = parseInt(document.getElementById('term').value)
    
    if(!validation.validateValueImovel(valueImovel))
        {
            document.getElementById('erro_valor').classList.add('error');
            document.getElementById('erro_valor').style.display = 'block';
            document.getElementById('erro_valor').textContent = 'O valor tem que ser acima de 50.000';
        }
    else
        {
            document.getElementById('erro_valor').classList.remove('error')
            document.getElementById('erro_valor').style.display = 'none'
            document.getElementById('erro_valor').textContent = '';
        }
    
    if(!validation.validateTerm(valueTerm, selectElement.value))
        {
            document.getElementById('erro_prazo').classList.add('error');
            document.getElementById('erro_prazo').style.display = 'block';
            document.getElementById('erro_prazo').textContent = selectElement.value
            console.log(validation.validateTerm(valueTerm, selectElement))
        }
    else
    {
        document.getElementById('erro_prazo').classList.remove('error')
        document.getElementById('erro_prazo').style.display = 'none'
        document.getElementById('erro_prazo').textContent = '';
    }
    if(!validation.monthlyIncomeValidation(monthlyIncome))
        {
            document.getElementById('erro_valor').classList.add('error');
            document.getElementById('erro_valor').style.display = 'block';
            document.getElementById('erro_valor').textContent = 'Sua renda bruta tem que ser no minimo 1300';
        }
    else
    {
        document.getElementById('erro_valor').classList.remove('error')
        document.getElementById('erro_valor').style.display = 'none'
        document.getElementById('erro_valor').textContent = '';
    }
    if(!validation.propertyValueValidation(valueImovel, valueProperty))
        {
            document.getElementById('erro_valor').classList.add('error')
            document.getElementById('erro_valor').style.display = 'block'
            document.getElementById('erro_valor').textContent = 'O valor de entrada tem que ser pelo menos 20% do valor final';
        }
    else
    {
        document.getElementById('erro_valor').classList.remove('error')
        document.getElementById('erro_valor').style.display = 'none'
        document.getElementById('erro_valor').textContent = '';
    }
})

