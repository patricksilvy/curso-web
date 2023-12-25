<template>
  <div class="calculator">
    <DisplayComponent value="1000"/>
    <ButtonComponent label="AC" triple @onCalcButtonClick="clearMemory" />
    <ButtonComponent label="/" operation @onCalcButtonClick="setOperation" />
    <ButtonComponent label="7" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="8" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="9" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="*" operation @onCalcButtonClick="setOperation" />
    <ButtonComponent label="4" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="5" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="6" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="-" operation @onCalcButtonClick="setOperation" />
    <ButtonComponent label="1" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="2" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="3" @onCalcButtonClick="addDigit" />
    <ButtonComponent label="+" operation @onCalcButtonClick="setOperation" />
    <ButtonComponent label="0" double @onCalcButtonClick="addDigit" />
    <ButtonComponent label="." @onCalcButtonClick="addDigit"/>
    <ButtonComponent label="=" operation @onCalcButtonClick="setOperation" />
  </div>
</template>

<script>
import DisplayComponent from '@/components/DisplayComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    components: {DisplayComponent, ButtonComponent},
    methods: {
        clearMemory() {
            console.log('Limpar memoria')
        },
        setOperation(operation) {
            console.log('Operação ' + operation)
        },
        addDigit(n) {
            console.log('Digito ' + n)
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>