<template>
    <div class="flex-component">
        <h1>Директивы: v-bind</h1>

        <div class="flex-row">
            <div class="flex-column">
                <h3>vue.js</h3>

                html
                <highlightjs
                    autodetect
                    code="<div v-bind:data-attr='attr'
    :title='message'
    :class='classMessage'
    :style='{ color: colorMessage }'
    >{{ message }}</div>
"/>
                js
                <highlightjs
                    autodetect
                    code="export default {
  data: () => ({
    message: 'тут что то будет',
    attr: 5,
    classMessage: 'alert',
    colorMessage: '#ff0000'
  })
}"/>

<div class="demo">
    <div :title='message'
         v-bind:data-attr='attr'
         :class='classMessage'
         :style='{ color: colorMessage }'
    >{{ message }}</div>
</div>
            </div>
            <div class="flex-column">
                <h3>jQuery</h3>

                html
                <highlightjs
                    autodetect
                    code="<div></div>"/>
                js
                <highlightjs
                    autodetect
                    code="const message = 'тут что то будет';

$('div').addClass('messageClass')
    .html(message)
    .attr('title', message)
    .css('color', '#ff0000')
    .data('attr', 5);"/>
            </div>
        </div>
        <img src="data:image/png;base64,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">
    </div>
</template>

<script>

export default {
    data: () => ({
        message: 'тут что то будет',
        attr: 5,
        classMessage: 'alert',
        colorMessage: '#ff0000'
    }),
}
</script>

<style scoped>

</style>
