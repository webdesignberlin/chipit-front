<template>
    <div class="app">
        <div class="MagicboxContainer">
            <Magicbox></Magicbox>

        </div>
    </div>
</template>

<script>
import Magicbox from './Components/Magicbox.vue'

export default {
    name: 'app',
    components: { Magicbox }
}
</script>

<style lang='scss'>

/* monofont, for doing monostuff */
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400,700');
html,
body {
    font-family: 'Source Code Pro', monospace;
    color: #2c3e50;
}

/* guud culurz */
$blue1: #16a085;
$blue2: #3498db;

/* Background stuff */
body {
    background: $blue1;
    background:  -webkit-linear-gradient(left top, $blue1, $blue2);
    background:   -o-linear-gradient(bottom right, $blue1, $blue2);
    background: -moz-linear-gradient(bottom right, $blue1, $blue2);
    background:   linear-gradient(to bottom right, $blue1, $blue2);
    background-attachment: fixed;
}

.app {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.MagicboxContainer {
    align-self: center;
    margin: 20px;
}

</style>
